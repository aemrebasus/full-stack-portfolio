import { ICanSignIn, ICredential } from './ican/ICanSignIn';
import { UserModel, IUser } from '@domain/entities/IUser';
import { verifyPassword, sign } from '@shared/jwt';
import { ICanViewMyself } from './ican/ICanView';


export class Developer
    implements
    ICanViewMyself,
    // ICanViewMyIssue,
    // ICanUpdateMyIssueStatus,
    // ICanCreateCommentOnMyIssue,
    // ICanDeleteMyComment,
    ICanSignIn {


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