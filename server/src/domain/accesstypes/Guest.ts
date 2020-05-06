import { IOrganization, OrganizationModel } from '@domain/entities/IOrganization';
import { hashPassword, sign } from '@shared/jwt';
import { IUser, UserModel } from '@domain/entities/IUser';
import { ICanSignUp } from './ican/ICanSignIn';

export class Guest implements ICanSignUp {

    signUp(signUpForm: IOrganization, callback?: (response: any) => void): Promise<any> {

        return new Promise((res, rej) => {
            hashPassword(signUpForm.password)
                .then(hashedPassword => {
                    signUpForm.password = hashedPassword;
                    new OrganizationModel(signUpForm)
                        .save()
                        .then(o => {
                            const newUser: IUser = {
                                firstName: o.firstName,
                                lastName: o.lastName,
                                email: o.email,
                                password: o.password,
                                role: 'admin',
                                organizationId: o._id,
                            }

                            new UserModel(newUser)
                                .save()
                                .then(user => {
                                    sign(user)
                                        .then(token => {
                                            res(token)
                                        })
                                        .catch(err => {
                                            rej(err)
                                        })


                                })
                                .catch(err => rej(err))

                        })
                        .catch(err => rej(err));

                })
                .catch(err => rej(err))
        })

    }

}