import { IUser } from '@domain/entities/IUser';
import { IID } from '@domain/types/IID';

export interface ICanViewUser<TUser = IUser, TID = IID, TReturn = IUser> {
    viewUserById(id: TID, callback?: (back: TReturn) => void): Promise<TReturn | null>;
}