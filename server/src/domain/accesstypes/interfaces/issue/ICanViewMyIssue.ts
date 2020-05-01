import { IID } from '@domain/types/IID';
import { IIssue } from '@domain/entities/IIssue';
import { IIssueStatus } from '@domain/types/IIssueStatus';

export interface ICanViewMyIssue<TID = IID, TIssue = IIssue, TIssueStatus = IIssueStatus> {
    viewMyIssueById(id: TID, callback?: (data: TIssue) => void): Promise<TIssue | null>;
    viewMyIssueByStatus(status: TIssueStatus, callback?: (data: TIssue) => void): Promise<TIssue[] | null>;
    viewMyAllIssues(callback: (issues: TIssue) => void): Promise<TIssue[] | null>;
}