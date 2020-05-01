import { IID } from '@domain/types/IID';
import { IIssueStatus } from '@domain/types/IIssueStatus';

export interface IIssue {
    _id?: IID;
    userid?: IID;
    title?: string;
    description?: string;
    status?: IIssueStatus;
    createdOn?: Date;
    organization?: string;
}