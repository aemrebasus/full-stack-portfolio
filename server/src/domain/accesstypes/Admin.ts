import { ScrumMaster } from './ScrumMaster';
import { IUser, UserModel } from '@domain/entities/IUser';
import { ICanCreateUser } from './ican/ICanCreate';
import { ICanValidate } from './ican/ICanValidate';



export class Admin extends ScrumMaster implements
    ICanCreateUser, ICanValidate {


    async validateUser(credentials: { email: string; password: string; }): Promise<IUser | null> {
        return await UserModel.findOne(credentials);
    }


    async createNewUser(user: IUser, callback?: ((back: IUser) => void) | undefined): Promise<IUser> {
        return await new UserModel(user).save();
    }




}