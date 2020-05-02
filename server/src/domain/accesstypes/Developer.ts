import { ICanDeleteMyComment } from '@domain/accesstypes/interfaces/comment/ICanDeleteMyComment';
import { ICanUpdateMyIssueStatus } from '@domain/accesstypes/interfaces/issue/ICanUpdateMyIssueStatus';
import { ICanViewMyIssue } from '@domain/accesstypes/interfaces/issue/ICanViewMyIssue';
import { ICanViewMyself } from '@domain/accesstypes/interfaces/user/ICanViewMyself';
import { ICanCreateCommentOnMyIssue } from '@domain/accesstypes/interfaces/comment/ICanCreateCommentOnMyIssue';
import { IIssue } from '@domain/entities/IIssue';
import { IComment } from '@domain/entities/IComment';
import { IUser } from '@domain/entities/IUser';
import { IIssueStatus } from '@domain/types/IIssueStatus';
import { Guest } from './Guest';
import { ICanSignIn } from './interfaces/user/ICanSignIn';

export class Developer implements
    ICanViewMyself,
    ICanViewMyIssue,
    ICanUpdateMyIssueStatus,
    ICanCreateCommentOnMyIssue,
    ICanDeleteMyComment,
    ICanSignIn {
    viewMyIssueById(id: string, callback?: import("./interfaces/ICallback").ICallback<IIssue> | undefined): Promise<IIssue | null> {
        throw new Error("Method not implemented.");
    }
    viewMyIssueByStatus(status: IIssueStatus, callback?: import("./interfaces/ICallback").ICallback<IIssue> | undefined): Promise<IIssue[] | null> {
        throw new Error("Method not implemented.");
    }
    viewMyAllIssues(callback?: import("./interfaces/ICallback").ICallback<IIssue[]> | undefined): Promise<IIssue[] | null> {
        throw new Error("Method not implemented.");
    }
    createNewCommentOnMyIssue(comment: IComment, callback?: import("./interfaces/ICallback").ICallback<boolean | null> | undefined): Promise<boolean | null> {
        throw new Error("Method not implemented.");
    }
    deleteOwnCommentById(id: string, callback?: import("./interfaces/ICallback").ICallback<boolean | null> | undefined): Promise<boolean | null> {
        throw new Error("Method not implemented.");
    }
    deleteOwnComment(comment: IComment, callback?: import("./interfaces/ICallback").ICallback<boolean | null> | undefined): Promise<boolean | null> {
        throw new Error("Method not implemented.");
    }
        
    signIn(credentials: { email: string; password: string; }, callback: (response: any) => void): Promise<any> {
        throw new Error("Method not implemented.");
    }
    signOut(credentials: { email: string; password: string; }, callback: (response: any) => void): Promise<any> {
        throw new Error("Method not implemented.");
    }
    updateMyIssueById(id: string, updatedIssue: IIssue, callback?: ((back: boolean) => void) | undefined): Promise<boolean | null> {
        throw new Error('Method not implemented.');
    }
    viewMyself(id: string, callback?: ((back: IUser) => void) | undefined): Promise<IUser | null> {
        throw new Error('Method not implemented.');
    }
   

}