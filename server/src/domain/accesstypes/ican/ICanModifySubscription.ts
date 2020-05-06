import { IID } from '@domain/entities/IID';
import { ISubscription } from '@domain/entities/ISubscription';
import { ICallback } from './ICallback';


export type UserNumberLimit = number
export type IssueNumberLimit = number;

export interface ICanModifySubscription<TID = IID, TReturn = ISubscription | null> {


    limitUserNumber(organizationId: TID, limit: UserNumberLimit, callback: ICallback<TReturn>): Promise<TReturn>;
    limitIssueNumber(organizationId: TID, limit: IssueNumberLimit, callback: ICallback<TReturn>): Promise<TReturn>;


    // updateOwnCommentById(id: TID, updatedComment: TComment, callback?: ICallback<TReturn>): Promise<TReturn>;
}