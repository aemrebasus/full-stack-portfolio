import { ICallback } from './ICallback';
import { IID } from '@domain/entities/IID';
import { IIssue } from '@domain/entities/IIssue';
import { IIssueStatus } from '@domain/entities/IIssueStatus';
import { IUser } from '@domain/entities/IUser';
import { IComment } from '@domain/entities/IComment';

export interface ICanDeleteComment<TID = IID, TComment = IComment, TReturn = boolean | null> {
    deleteCommentById(organizationId: TID, id: string, callback?: ICallback<TReturn>): Promise<TReturn>;
    deleteComment(organizationId: TID, comment: TComment, callback?: (back: TReturn) => void): Promise<TReturn>;
}

export interface ICanDeleteMyComment<TID = IID, TComment = IComment, TReturn = boolean | null> {
    deleteOwnCommentById(organizationId: TID, userId: TID, id: TID, callback?: ICallback<TReturn>): Promise<TReturn>;
    deleteOwnComment(organizationId: TID, userId: TID, comment: TComment, callback?: ICallback<TReturn>): Promise<TReturn>;
}


export interface ICanDeleteIssue<TID = IID, TIssue = IIssue, TStatus = IIssueStatus, TReturn = boolean | null> {
    deleteIssueById(organizationId: TID, id: TID, callback?: (back: TReturn) => void): Promise<TReturn>;
    deleteIssueByStatus(organizationId: TID, status: TStatus, callback?: (back: TReturn) => void): Promise<TReturn>;
    deleteIssue(issue: TIssue, callback?: (back: TReturn) => void): Promise<TReturn>;
}


export interface ICanDeleteUser<TID = IID, TUser = IUser, TReturn = boolean | null> {
    deleteUserById(organizationId: TID, id: TID, callback?: (back: TReturn) => void): Promise<TReturn>;
    deleteUser(user: TUser, callback?: (back: TReturn) => void): Promise<TReturn>;
}