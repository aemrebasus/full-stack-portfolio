import { IUser } from '@domain/entities/IUser';

export interface ICanCreateUser<TUser = IUser, TReturn = boolean> {
    createNewUser(user: TUser, callback?: (back: TReturn) => void): Promise<TReturn | null>;
}