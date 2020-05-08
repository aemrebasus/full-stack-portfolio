import { ICallback } from './ICallback';
import { IComment } from '@domain/entities/IComment';
import { IIssue } from '@domain/entities/IIssue';
import { IUser } from '@domain/entities/IUser';
import { IID } from '@domain/entities/IID';
import { IProject } from '@domain/entities/IProject';

export interface ICanCreateComment<TEntity = IComment, TReturn = TEntity | null> {
    createNewComment(comment: TEntity, callback?: ICallback<TReturn>): Promise<TReturn>;
}

export interface ICanCreateCommentOnMyIssue<TID = IID, TEntity = IComment, TReturn = TEntity | null> {
    createNewCommentOnMyIssue(organizationId: TID, userId: TID, comment: TEntity, callback?: ICallback<TReturn>): Promise<TReturn>;
}

/**
 * Which implements this interface can create a new issue in own organization.
 */
export interface ICanCreateIssue<TEntity = IIssue, TReturn = TEntity | null> {
    createNewIssue(issue: TEntity, callback?: (back: TReturn) => void): Promise<TReturn>;
}

export interface ICanCreateUser<TEntity = IUser, TReturn = TEntity | null> {
    createNewUser(user: TEntity, callback?: (back: TReturn) => void): Promise<TReturn>;
}

export interface ICanCreateProject<TEntity = IProject, TReturn = IProject | null> {
    createProject(project: TEntity, callback?: (back: TReturn) => void): Promise<TReturn>;
}

