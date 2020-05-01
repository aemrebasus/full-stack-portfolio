import { IID } from '@domain/types/IID';
import { IIssue } from '@domain/entities/IIssue';

export interface ICanUpdateIssue<TID = IID, TIssue = IIssue, TReturn = boolean> {
    updateIssueById(id: TID, updatedIssue: TIssue, callback?: (back: TReturn) => void): Promise<TReturn | null>;
}