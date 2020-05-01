import { IID } from '@domain/types/IID';
import { IIssue } from '@domain/entities/IIssue';
import { IIssueStatus } from '@domain/types/IIssueStatus';

export interface ICanDeleteIssue<TID = IID, TIssue = IIssue, TStatus = IIssueStatus, TReturn = boolean> {
    deleteIssueById(id: TID, callback?: (back: TReturn) => void): Promise<TReturn | null>;
    deleteIssueByStatus(status: TStatus, callback?: (back: TReturn) => void): Promise<TReturn> | null;
    deleteIssue(issue: TIssue, callback?: (back: TReturn) => void): Promise<TReturn | null>;
}