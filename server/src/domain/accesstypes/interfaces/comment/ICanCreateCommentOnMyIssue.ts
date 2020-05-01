import { IComment } from '@domain/entities/IComment';

export interface ICanCreateCommentOnMyIssue<TComment = IComment, TReturn = boolean | null> {
    createNewCommentOnMyIssue(comment: TComment, callback?: (result: TReturn) => void): Promise<TReturn>;
}