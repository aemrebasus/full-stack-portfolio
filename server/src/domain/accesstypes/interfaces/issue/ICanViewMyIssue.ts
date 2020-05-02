import { IID } from '@domain/types/IID';
import { IIssue } from '@domain/entities/IIssue';
import { IIssueStatus } from '@domain/types/IIssueStatus';
import { ICallback } from '../ICallback';

export interface ICanViewMyIssue<TID = IID, TIssue = IIssue, TIssueStatus = IIssueStatus> {
    viewMyIssueById(id: TID, callback?: ICallback<TIssue>): Promise<TIssue | null>;
    viewMyIssueByStatus(status: TIssueStatus, callback?: ICallback<TIssue>): Promise<TIssue[] | null>;
    viewMyAllIssues(callback?: ICallback<TIssue[]>): Promise<TIssue[] | null>;
}