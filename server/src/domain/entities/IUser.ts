import { IID } from '@domain/types/IID';
import { IRole } from '@domain/types/IRole';

export interface IUser  {
    organizatonId?: IID;
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
    role?: IRole;
}