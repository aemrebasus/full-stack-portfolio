import { IID } from './IID';
import { IIssueStatus } from './IIssueStatus';

export interface IIssue {
    _id?: IID;
    userId?: IID;
    organizationId?: string;
    projectId?: string;
    title?: string;
    description?: string;
    status?: IIssueStatus;
    createdOn?: Date;
}
