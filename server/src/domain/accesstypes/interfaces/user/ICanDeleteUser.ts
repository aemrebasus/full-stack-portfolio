import { IUser } from '@domain/entities/IUser';
import { IID } from '@domain/types/IID';

export interface ICanDeleteUser<TUser = IUser, TReturn = boolean> {
    deleteUserById(id: IID, callback?: (back: TReturn) => void): Promise<TReturn | null>;
    deleteUser(user: TUser, callback?: (back: TReturn) => void): Promise<TReturn | null>;
}