import { IID } from '@domain/types/IID';
import { IComment } from '@domain/entities/IComment';

export interface ICanDeleteMyComment<TID = IID, TComment = IComment, TReturn = boolean | null> {
    deleteOwnCommentById(id: TID, callback?: (back: TReturn) => void): Promise<TReturn>;
    deleteOwnComment(comment: TComment, callback?: (back: TReturn) => void): Promise<TReturn >;
}