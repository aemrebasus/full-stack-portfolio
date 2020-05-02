import { Developer } from './Developer';
import { ICanCreateIssue } from './interfaces/issue/ICanCreateIssue';
import { ICanDeleteIssue } from './interfaces/issue/ICanDeleteIssue';
import { ICanViewIssue } from './interfaces/issue/ICanViewIssue';
import { ICanUpdateIssue } from './interfaces/issue/ICanUpdateIssue';
import { ICanViewComment } from './interfaces/comment/ICanViewComment';
import { ICanCreateComment } from './interfaces/comment/ICanCreateComment';
import { ICanDeleteComment } from './interfaces/comment/ICanDeleteComment';
import { ICanUpdateComment } from './interfaces/comment/ICanUpdateComment';

import { IIssue } from '../entities/IIssue';
import { IUser } from '@domain/entities/IUser';
import { IComment } from '../entities/IComment';
import { IIssueStatus } from '../types/IIssueStatus';
import { ICanAssignIssue } from './interfaces/issue/ICanAssignIssue';
import { ICanViewUser } from './interfaces/user/ICanViewUser';
import { UserModel } from '@domain/dbmodel/UserModel';
import { ICallback } from './interfaces/ICallback';

export class ScrumMaster extends Developer implements
    ICanCreateIssue,
    ICanDeleteIssue,
    ICanViewIssue,
    ICanUpdateIssue,

    ICanViewUser,

    ICanViewComment,
    ICanCreateComment,
    ICanDeleteComment,
    ICanUpdateComment,

    ICanAssignIssue {
    createNewIssue(issue: IIssue, callback?: ((back: boolean) => void) | undefined): Promise<boolean | null> {
        throw new Error("Method not implemented.");
    }
    deleteIssueById(id: string, callback?: ((back: boolean) => void) | undefined): Promise<boolean | null> {
        throw new Error("Method not implemented.");
    }
    deleteIssueByStatus(status: IIssueStatus, callback?: ((back: boolean) => void) | undefined): Promise<boolean> | null {
        throw new Error("Method not implemented.");
    }
    deleteIssue(issue: IIssue, callback?: ((back: boolean) => void) | undefined): Promise<boolean | null> {
        throw new Error("Method not implemented.");
    }
    viewIssueById(id: string, callback?: ((data: IIssue) => void) | undefined): Promise<IIssue | null> {
        throw new Error("Method not implemented.");
    }
    viewIssueByStatus(status: IIssueStatus, callback?: ((data: IIssue) => void) | undefined): Promise<IIssue[] | null> {
        throw new Error("Method not implemented.");
    }
    viewAllIssues(callback: (issues: IIssue) => void): Promise<IIssue[] | null> {
        throw new Error("Method not implemented.");
    }
    updateIssueById(id: string, updatedIssue: IIssue, callback?: ((back: boolean) => void) | undefined): Promise<boolean | null> {
        throw new Error("Method not implemented.");
    }
    viewUserById(id: string, callback?: ICallback<IUser> | undefined): Promise<IUser | null> {
        throw new Error("Method not implemented.");
    }
    viewAllUsers(callback?: ICallback<IUser[]> | undefined): Promise<IUser[] | null> {
        return UserModel.find({}).then()
    }
    viewCommentById(id: string, callback?: ICallback<IComment> | undefined): Promise<IComment> {
        throw new Error("Method not implemented.");
    }
    viewAllComments(callback?: ICallback<IComment[]> | undefined): Promise<IComment[]> {
        throw new Error("Method not implemented.");
    }
    createNewComment(comment: IComment, callback?: ICallback<boolean> | undefined): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    deleteCommentById(id: string, callback?: ICallback<boolean | null> | undefined): Promise<boolean | null> {
        throw new Error("Method not implemented.");
    }
    deleteComment(comment: IComment, callback?: ((back: boolean | null) => void) | undefined): Promise<boolean | null> {
        throw new Error("Method not implemented.");
    }
    updateCommentById(id: string, updatedComment: IComment, callback?: ICallback<boolean> | undefined): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    assignIssueToUser(user: IUser, issue: IIssue, callback?: ((back: boolean) => void) | undefined): Promise<boolean | null> {
        throw new Error("Method not implemented.");
    }
    dessignIssueFromUser(user: IUser, issue: IIssue, callback?: ((back: boolean) => void) | undefined): Promise<boolean | null> {
        throw new Error("Method not implemented.");
    }



}