import { IIssue } from '@domain/entities/IIssue';
import { IUser } from '@domain/entities/IUser';
import { IID } from '@domain/entities/IID';

export interface ICanAssignIssue<TID = IID, TIssue = IIssue, TUser = IUser, TReturn = boolean | null> {
    assignIssueToUser(organizationId: TID, issue: TIssue, callback?: (back: TReturn) => void): Promise<TReturn>;
    dessignIssueFromUser(organizationId: TID, issue: TIssue, callback?: (back: TReturn) => void): Promise<TReturn>;
}