import { IID } from '@domain/types/IID';
import { IUser } from '@domain/entities/IUser';

export interface ICanUpdateUser<TID = IID, TUser = IUser, TReturn = boolean> {
    updateUserById(userid: TID, updatedUser: TUser, callback?: (back: TReturn) => void): Promise<TReturn | null>;
    updateUserByEmail(email: string, updatedUser: TUser, callback?: (back: TReturn) => void): Promise<TReturn | null>;
}