import { ICallback } from './ICallback';
import { IID } from '@domain/entities/IID';
import { IComment } from '@domain/entities/IComment';
import { IIssue } from '@domain/entities/IIssue';
import { IUser } from '@domain/entities/IUser';

export interface ICanUpdateComment<TID = IID, TComment = IComment, TReturn = boolean> {
    updateCommentById(orgId: TID, id: TID, updatedComment: TComment, callback?: ICallback<TReturn>): Promise<TReturn>;
}



export interface IOwnCommentUpdate<TID = IID, TComment = IComment, TReturn = boolean> {
    updateOwnCommentById(id: TID, updatedComment: TComment, callback?: ICallback<TReturn>): Promise<TReturn>;
}


export interface ICanUpdateIssue<TID = IID, TIssue = IIssue, TReturn = boolean> {
    updateIssueById(organizationId: TID, id: TID, updatedIssue: TIssue, callback?: (back: TReturn) => void): Promise<TReturn | null>;
}


export interface ICanUpdateMyIssueStatus<TID = IID, TIssue = IIssue, TReturn = boolean> {
    updateMyIssueById(organizationId: TID, userId: TID, id: TID, updatedIssue: TIssue, callback?: (back: TReturn) => void): Promise<TReturn | null>;
}


export interface ICanUpdateUser<TID = IID, TUser = IUser, TReturn = boolean> {
    updateUserById(orgId: TID, userid: TID, updatedUser: TUser, callback?: (back: TReturn) => void): Promise<TReturn | null>;
    updateUserByEmail(orgId: TID, email: string, updatedUser: TUser, callback?: (back: TReturn) => void): Promise<TReturn | null>;
}