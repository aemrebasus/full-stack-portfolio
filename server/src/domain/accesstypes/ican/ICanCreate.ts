import { ICallback } from './ICallback';
import { IComment } from '@domain/entities/IComment';
import { IIssue } from '@domain/entities/IIssue';
import { IUser } from '@domain/entities/IUser';

export interface ICanCreateComment<TEntity = IComment, TReturn = TEntity> {
    createNewComment(comment: TEntity, callback?: ICallback<TReturn>): Promise<TReturn>;
}

export interface ICanCreateCommentOnMyIssue<TEntity = IComment, TReturn = TEntity> {
    createNewCommentOnMyIssue(comment: TEntity, callback?: ICallback<TReturn>): Promise<TReturn>;
}

export interface ICanCreateIssue<TEntity = IIssue, TReturn = TEntity> {
    createNewIssue(issue: TEntity, callback?: (back: TReturn) => void): Promise<TReturn>;
}

export interface ICanCreateUser<TEntity = IUser, TReturn = TEntity> {
    createNewUser(user: TEntity, callback?: (back: TReturn) => void): Promise<TReturn>;
}