import { IIssue } from '@domain/entities/IIssue';

export interface ICanCreateIssue<TIssue = IIssue, TReturn = boolean> {
    createNewIssue(issue: TIssue, callback?: (back: TReturn) => void): Promise<TReturn | null>;
}