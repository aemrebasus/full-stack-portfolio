import { ScrumMaster } from './ScrumMaster';
import { IUser, UserModel } from '@domain/entities/IUser';
import { ICanCreateUser } from './ican/ICanCreate';
import { hashPassword } from '@shared/jwt';
import { ICanDeleteUser } from './ican/ICanDelete';



export class Admin extends ScrumMaster implements
    ICanCreateUser, ICanDeleteUser {

    deleteUserById(orgId: string, id: string, callback?: ((back: boolean | null) => void) | undefined): Promise<any> {
        return UserModel.deleteOne({ _id: id, organizationId: orgId }).then(result => result);
    }

    deleteUser(user: IUser, callback?: ((back: boolean | null) => void) | undefined): Promise<any> {
        return UserModel.deleteOne({ email: user.email, organizationId: user.organizationId }).then(result => result);
    }

    createNewUser(user: IUser, callback?: ((back: IUser) => void) | undefined): Promise<IUser> {
        return hashPassword(user.password)
            .then(hashed => {
                user.password = hashed;
                return new UserModel(user).save();
            })
    }

}