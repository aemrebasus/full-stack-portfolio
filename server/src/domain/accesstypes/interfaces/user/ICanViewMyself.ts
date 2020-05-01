import { IID } from '@domain/types/IID';
import { IUser } from '@domain/entities/IUser';

export interface ICanViewMyself<TID = IID, TReturn = IUser> {
    viewMyself(id: TID, callback?: (back: TReturn) => void): Promise<TReturn | null>;
}
