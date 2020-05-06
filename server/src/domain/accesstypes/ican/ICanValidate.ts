import { IUser } from '@domain/entities/IUser';

export interface ICanValidate<TCredential = { email: string, password: string }, TUser = IUser, TReturn = IUser | null> {
    validateUser(credentials: TCredential): Promise<TReturn>;
}
