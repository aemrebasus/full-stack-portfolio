import { IOrganization, OrganizationModel } from '@domain/entities/IOrganization';
import { hashPassword, sign } from '@shared/jwt';
import { IUser, UserModel } from '@domain/entities/IUser';
import { ICanSignUp } from './ican/ICanSignIn';
import { SubscriptionModel, ISubscription } from '@domain/entities/ISubscription';
import { Error } from 'mongoose';

export class Guest implements ICanSignUp {


    private isOrganizationExist(email: string, name: string): Promise<boolean> {
        return OrganizationModel
            .find({ email, name })
            .then(orgs => {
                return orgs.length > 0;
            })
    }

    private isUserExist(email: string, organizationId: string): Promise<boolean> {
        return UserModel
            .find({ email, organizationId })
            .then(users => {
                return users.length > 0;
            })
    }

    private createOrganization(signUpForm: IOrganization): Promise<IOrganization> {
        const { email, name } = signUpForm;
        return this.isOrganizationExist(email, name)
            .then(isExist => {
                if (isExist) {
                    throw new Error('Organization exists!')
                } else {
                    return hashPassword(signUpForm.password)
                }
            }).then(hashedPassword => {
                return new OrganizationModel({ ...signUpForm, password: hashedPassword }).save()
            })
    }

    private async createUser(user: IUser): Promise<IUser> {
        return this.isUserExist(user.email, user.organizationId)
            .then(isExist => {
                if (isExist) {
                    throw new Error('User exists!')
                } else {
                    return new UserModel(user).save()
                }
            })


    }

    private createSubscription(organizationId: string): Promise<ISubscription> {
        const newSubsData: ISubscription = {
            start: new Date(Date.now()),
            end: new Date(new Date(Date.now()).setFullYear(new Date(Date.now()).getFullYear() + 1)),
            issueLimit: 10,
            userLimit: 3,
            organizationId
        }
        return new SubscriptionModel(newSubsData).save()

    }

    signUp(signUpForm: IOrganization, callback?: (response: any) => void): Promise<any> {
        return this.createOrganization(signUpForm)
            .then(newOrg => {
                const newuser: IUser = {
                    email: newOrg.email,
                    firstName: newOrg.firstName,
                    lastName: newOrg.lastName,
                    organizationId: newOrg._id!,
                    password: newOrg.password,
                    role: 'admin'
                }
                return newuser;
            })
            .then(newUser => {
                return this.createUser(newUser)
                    .then(createdUser => {
                        return this.createSubscription(createdUser.organizationId);
                    }).then(_ => {
                        return sign(newUser)
                    })

            })
            .catch(err => {
                throw err;
            });


    }


}

