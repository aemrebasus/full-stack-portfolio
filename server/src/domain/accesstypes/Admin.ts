import { ScrumMaster } from './ScrumMaster';
import { ICanCreateUser } from '@domain/accesstypes/interfaces/user/ICanCreteUser';
import { ICanViewUser } from '@domain/accesstypes/interfaces/user/ICanViewUser';
import { ICanUpdateUser } from '@domain/accesstypes/interfaces/user/ICanUpdateUser';
import { ICanDeleteUser } from '@domain/accesstypes/interfaces/user/ICanDeleteUser';
import { IUser } from '@domain/entities/IUser';

export class Admin extends ScrumMaster implements
    ICanCreateUser,
    ICanViewUser,
    ICanUpdateUser,
    ICanDeleteUser {
    createNewUser(user: IUser, callback?: ((back: boolean) => void) | undefined): Promise<boolean | null> {
        throw new Error("Method not implemented.");
    }
    viewUserById(id: string, callback?: ((back: IUser) => void) | undefined): Promise<IUser | null> {
        throw new Error("Method not implemented.");
    }
    updateUserById(userid: string, updatedUser: IUser, callback?: ((back: boolean) => void) | undefined): Promise<boolean | null> {
        throw new Error("Method not implemented.");
    }
    updateUserByEmail(email: string, updatedUser: IUser, callback?: ((back: boolean) => void) | undefined): Promise<boolean | null> {
        throw new Error("Method not implemented.");
    }
    deleteUserById(id: string, callback?: ((back: boolean) => void) | undefined): Promise<boolean | null> {
        throw new Error("Method not implemented.");
    }
    deleteUser(user: IUser, callback?: ((back: boolean) => void) | undefined): Promise<boolean | null> {
        throw new Error("Method not implemented.");
    }



}