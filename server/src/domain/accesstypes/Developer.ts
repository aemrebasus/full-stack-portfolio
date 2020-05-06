import { ICanSignIn, ICredential } from './ican/ICanSignIn';
import { UserModel, IUser } from '@domain/entities/IUser';
import { verifyPassword, sign } from '@shared/jwt';


export class Developer
    implements
    // ICanViewMyself,
    // ICanViewMyIssue,
    // ICanUpdateMyIssueStatus,
    // ICanCreateCommentOnMyIssue,
    // ICanDeleteMyComment,
    ICanSignIn {

    signIn(credentials: ICredential, callback?: ((response: IUser) => void) | undefined): Promise<any> {
        return new Promise((res, rej) => {
            UserModel.findOne({})
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
                                rej('Password could not be read!');
                            })

                    }
                })
                .catch(err => {
                    rej(err);
                })
        })
    }



}