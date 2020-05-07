import { IID } from './IID';

export interface IComment {
    _id?: IID;
    userId?: IID;
    organizationId?: IID;
    issueId?: IID;
    content?: string;
    date?: Date;
}
