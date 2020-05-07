import { IID } from './IID';

export type IRole = 'admin' | 'scrummaster' | 'developer' | 'guest';

export interface IUser {
    _id?: IID;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    organizationId: IID;
    role: IRole;
}

