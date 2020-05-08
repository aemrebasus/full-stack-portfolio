import { ICallback } from './ICallback';
import { IID } from '@domain/entities/IID';
import { IIssue } from '@domain/entities/IIssue';
import { IIssueStatus } from '@domain/entities/IIssueStatus';
import { IUser } from '@domain/entities/IUser';
import { IComment } from '@domain/entities/IComment';
import { IProject } from '@domain/entities/IProject';

export interface ICanViewComment<TID = IID, TReturn = IIssue> {
    viewCommentById(organizationId: string, id: TID, callback?: ICallback<TReturn>): Promise<TReturn>;
    viewAllComments(organizationId: string, callback?: ICallback<TReturn[]>): Promise<TReturn[]>;
}


export interface ICanViewCommentsOfMyIssue<TID = IID, TReturn = IComment> {
    viewAllCommentsOfMyIssue(organizationId: TID, userId: TID, issueId: TID): Promise<TReturn>;
}


export interface ICanViewIssue<TID = IID, TIssue = IIssue | null, TIssueStatus = IIssueStatus> {
    viewIssueById(organizationId: TID, id: TID, callback?: (data: TIssue) => void): Promise<TIssue>;
    viewIssueByStatus(organizationId: TID, status: TIssueStatus, callback?: (data: TIssue) => void): Promise<TIssue[]>;
    viewAllIssues(organizationId: TID, callback: (issues: TIssue) => void): Promise<TIssue[]>;
}

export interface ICanViewMyIssue<TID = IID, TIssue = IIssue | null, TIssueStatus = IIssueStatus> {
    viewMyIssueById(organizationId: TID, userId: TID, id: TID, callback?: ICallback<TIssue>): Promise<TIssue>;
    viewMyIssueByStatus(organizationId: TID, userId: TID, status: TIssueStatus, callback?: ICallback<TIssue>): Promise<TIssue[]>;
    viewMyAllIssues(organizationId: TID, userId: TID, callback?: ICallback<TIssue[]>): Promise<TIssue[]>;
}


export interface ICanViewUser<TID = IID, TUser = IUser, TReturn = IUser | null> {
    viewUser(user: TUser, callback?: ICallback<TReturn>): Promise<TReturn>;
    viewUserById(organizationId: TID, id: TID, callback?: ICallback<TReturn>): Promise<TReturn>;
    viewUserByEmail(organizationId: TID, email: string, callback?: ICallback<TReturn>): Promise<TReturn>;
    viewAllUsers(organizationId: TID, callback?: ICallback<TReturn[]>): Promise<TReturn[]>;
}



export interface ICanViewMyself<TID = IID, TReturn = IUser> {
    viewMyself(email: string, callback?: (back: TReturn) => void): Promise<TReturn | null>;
}



export interface ICanViewProject<TID = IID, TProjetc = IProject, TReturn = IProject | null> {
    viewAllProjects(organizationId: TID, callback?: ICallback<TReturn[]>): Promise<TReturn[]>;
}


