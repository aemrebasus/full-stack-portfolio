import { ICallback } from './ICallback';
import { IID } from '@domain/entities/IID';
import { IIssue } from '@domain/entities/IIssue';
import { IIssueStatus } from '@domain/entities/IIssueStatus';
import { IUser } from '@domain/entities/IUser';

export interface ICanViewComment<TID = IID, TReturn = IIssue> {
    viewCommentById(id: TID, callback?: ICallback<TReturn>): Promise<TReturn>;
    viewAllComments(callback?: ICallback<TReturn[]>): Promise<TReturn[]>;
}


export interface ICanViewIssue<TID = IID, TIssue = IIssue | null, TIssueStatus = IIssueStatus> {
    viewIssueById(id: TID, callback?: (data: TIssue) => void): Promise<TIssue>;
    viewIssueByStatus(status: TIssueStatus, callback?: (data: TIssue) => void): Promise<TIssue[]>;
    viewAllIssues(callback: (issues: TIssue) => void): Promise<TIssue[]>;
}

export interface ICanViewMyIssue<TID = IID, TIssue = IIssue | null, TIssueStatus = IIssueStatus> {
    viewMyIssueById(id: TID, callback?: ICallback<TIssue>): Promise<TIssue>;
    viewMyIssueByStatus(status: TIssueStatus, callback?: ICallback<TIssue>): Promise<TIssue[]>;
    viewMyAllIssues(callback?: ICallback<TIssue[]>): Promise<TIssue[]>;
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


