import { IID } from '@domain/types/IID';
import { IIssue } from '@domain/entities/IIssue';

export interface ICanUpdateMyIssueStatus<TID = IID, TIssue = IIssue, TReturn = boolean> {
    updateMyIssueById(id: TID, updatedIssue: TIssue, callback?: (back: TReturn) => void): Promise<TReturn | null>;
}