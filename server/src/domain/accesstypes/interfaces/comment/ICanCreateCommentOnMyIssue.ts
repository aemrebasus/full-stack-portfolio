import { IComment } from '@domain/entities/IComment';
import { ICallback } from '../ICallback';

export interface ICanCreateCommentOnMyIssue<TComment = IComment, TReturn = boolean | null> {
    createNewCommentOnMyIssue(comment: TComment, callback?: ICallback<TReturn>): Promise<TReturn>;
}