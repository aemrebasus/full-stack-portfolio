import { ICanSignIn, ICredential } from './ican/ICanSignIn';
import { UserModel, IUser } from '@domain/entities/IUser';
import { verifyPassword, sign } from '@shared/jwt';
import { ICanViewMyself, ICanViewMyIssue, ICanViewCommentsOfMyIssue } from './ican/ICanView';
import { ICallback } from './ican/ICallback';
import { IIssue, IssueModel } from '@domain/entities/IIssue';
import { IIssueStatus } from '@domain/entities/IIssueStatus';
import { ICanUpdateMyIssueStatus } from './ican/ICanUpdate';
import { ICanCreateCommentOnMyIssue } from './ican/ICanCreate';
import { CommentModel, IComment } from '@domain/entities/IComment';
import { ICanDeleteMyComment } from './ican/ICanDelete';
import logger from '@shared/Logger';
import { Error } from 'mongoose';


export class Developer
    implements
    ICanViewMyself,
    ICanViewMyIssue,
    ICanViewCommentsOfMyIssue,
    ICanUpdateMyIssueStatus,
    ICanCreateCommentOnMyIssue,
    ICanDeleteMyComment,
    ICanSignIn {


    viewAllCommentsOfMyIssue(organizationId: string, userId: string, issueId: string): Promise<IComment> {
        return this.viewMyIssueById(organizationId, userId, issueId)
            .then(data => {
                return CommentModel.find({ issueId: data?._id }).then();
            });
    }








    deleteOwnCommentById(organizationId: string, userId: string, id: string, callback?: ICallback<boolean | null> | undefined): Promise<boolean | null> {
        return CommentModel.deleteOne({ organizationId, _id: id, userId }).then();
    }
    deleteOwnComment(organizationId: string, userId: string, comment: IComment, callback?: ICallback<boolean | null> | undefined): Promise<boolean | null> {
        return CommentModel.deleteOne({ organizationId, _id: comment._id, userId }).then();
    }



    createNewCommentOnMyIssue(organizationId: string, userId: string, comment: IComment, callback?: ICallback<IComment | null> | undefined): Promise<IComment | null> {
        return new CommentModel({ ...comment, organizationId, userId }).save()
    }




    updateMyIssueById(organizationId: string, userId: string, id: string, updatedIssue: IIssue, callback?: ((back: boolean) => void) | undefined): Promise<boolean | null> {
        return IssueModel.updateOne({ organizationId, userId, _id: id }, { ...updatedIssue, _id: id, organizationId }).then()
    }






    viewMyIssueByStatus(organizationId: string, userId: string, status: IIssueStatus, callback?: ICallback<IIssue | null> | undefined): Promise<(IIssue | null)[]> {
        return IssueModel.find({ status, organizationId }).then()
    }
    viewMyAllIssues(organizationId: string, userId: string, callback?: ICallback<(IIssue | null)[]> | undefined): Promise<(IIssue | null)[]> {
        return IssueModel.find({ organizationId, userId }).then();
    }

    viewMyIssueById(organizationId: string, userId: string, id: string, callback?: ICallback<IIssue | null> | undefined): Promise<IIssue | null> {
        return IssueModel.find({ organizationId, userId, _id: id }).then();
    }





    viewMyself(email: string, callback?: ((back: IUser) => void) | undefined): Promise<IUser | null | any> {
        return UserModel.find({ email }).then(result => result);
    }





    signIn(credentials: ICredential, callback?: ((response: IUser) => void) | undefined): Promise<any> {
        return new Promise((res, rej) => {
            UserModel.findOne({ email: credentials.email })
                .then(user => {
                    if (!user) {
                        rej('User not found');
                    } else {

                        verifyPassword(credentials.password, user.password)
                            .then(isPasswordValid => {
                                if (isPasswordValid) {
                                    sign(user)
                                        .then(token => res(token))
                                        .catch(err => rej(err))
                                } else {
                                    rej('Invalid Credential')
                                }
                            })
                            .catch(err => {
                                const msg = 'Password could not be read!';
                                rej(msg);
                                logger.error(new Error(msg))
                            })

                    }
                })
                .catch(err => {
                    rej(err);
                })
        })
    }
}