import { IID } from '@domain/types/IID';

export interface IComment {
    _id?: IID;
    userId?: IID;
    issueId?: IID;
    content?: string;
    date?: Date;
}
