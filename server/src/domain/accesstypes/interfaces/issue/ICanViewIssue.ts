import { IID } from '@domain/types/IID';
import { IIssue } from '@domain/entities/IIssue';
import { IIssueStatus } from '@domain/types/IIssueStatus';

export interface ICanViewIssue<TID = IID, TIssue = IIssue, TIssueStatus = IIssueStatus> {
    viewIssueById(id: TID, callback?: (data: TIssue) => void): Promise<TIssue | null>;
    viewIssueByStatus(status: TIssueStatus, callback?: (data: TIssue) => void): Promise<TIssue[] | null>;
    viewAllIssues(callback: (issues: TIssue) => void): Promise<TIssue[] | null>;
}