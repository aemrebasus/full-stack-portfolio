import { IID } from './IID';

export interface IOrganization {
    _id?: IID,
    name: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}
