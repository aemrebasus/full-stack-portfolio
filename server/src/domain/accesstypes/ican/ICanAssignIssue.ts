import { IIssue } from '@domain/entities/IIssue';
import { IUser } from '@domain/entities/IUser';

export interface ICanAssignIssue<TIssue = IIssue, TUser = IUser, TReturn = boolean | null> {
    assignIssueToUser(user: TUser, issue: TIssue, callback?: (back: TReturn) => void): Promise<TReturn>;
    dessignIssueFromUser(user: TUser, issue: TIssue, callback?: (back: TReturn) => void): Promise<TReturn>;
}