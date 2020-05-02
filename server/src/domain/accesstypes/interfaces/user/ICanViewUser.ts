import { IUser } from '@domain/entities/IUser';
import { IID } from '@domain/types/IID';
import { ICallback } from '../ICallback';

export interface ICanViewUser<TUser = IUser, TID = IID, TReturn = IUser> {
    viewUserById(id: TID, callback?: ICallback<TReturn>): Promise<TReturn | null>;
    viewAllUsers(callback?: ICallback<TReturn[]>): Promise<TReturn[] | null>
}