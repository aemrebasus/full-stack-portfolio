import { ICanDeleteMyComment } from '@domain/accesstypes/interfaces/comment/ICanDeleteMyComment';
import { ICanUpdateMyIssueStatus } from '@domain/accesstypes/interfaces/issue/ICanUpdateMyIssueStatus';
import { ICanViewMyIssue } from '@domain/accesstypes/interfaces/issue/ICanViewMyIssue';
import { ICanViewMyself } from '@domain/accesstypes/interfaces/user/ICanViewMyself';
import { ICanCreateCommentOnMyIssue } from '@domain/accesstypes/interfaces/comment/ICanCreateCommentOnMyIssue';
import { IIssue } from '@domain/entities/IIssue';
import { IComment } from '@domain/entities/IComment';
import { IUser } from '@domain/entities/IUser';
import { IIssueStatus } from '@domain/types/IIssueStatus';

export class Developer implements
    ICanViewMyself,
    ICanViewMyIssue,
    ICanUpdateMyIssueStatus,
    ICanCreateCommentOnMyIssue,
    ICanDeleteMyComment {
    updateMyIssueById(id: string, updatedIssue: IIssue, callback?: ((back: boolean) => void) | undefined): Promise<boolean | null> {
        throw new Error('Method not implemented.');
    }
    viewMyself(id: string, callback?: ((back: IUser) => void) | undefined): Promise<IUser | null> {
        throw new Error('Method not implemented.');
    }
    viewMyIssueById(id: string, callback?: ((data: IIssue) => void) | undefined): Promise<IIssue | null> {
        throw new Error('Method not implemented.');
    }
    viewMyIssueByStatus(status: IIssueStatus, callback?: ((data: IIssue) => void) | undefined): Promise<IIssue[] | null> {
        throw new Error('Method not implemented.');
    }
    viewMyAllIssues(callback: (issues: IIssue) => void): Promise<IIssue[] | null> {
        throw new Error('Method not implemented.');
    }
    updateOwnIssueStatusById(id: string, status: IIssueStatus, callback?: ((back: boolean) => void) | undefined): Promise<boolean | null> {
        throw new Error('Method not implemented.');
    }
    createNewCommentOnMyIssue(comment: IComment, callback?: ((result: boolean) => void) | undefined): Promise<boolean | null> {
        throw new Error('Method not implemented.');
    }
    deleteOwnCommentById(id: string, callback?: ((back: boolean) => void) | undefined): Promise<boolean | null> {
        throw new Error('Method not implemented.');
    }
    deleteOwnComment(comment: IComment, callback?: ((back: boolean) => void) | undefined): Promise<boolean | null> {
        throw new Error('Method not implemented.');
    }


}