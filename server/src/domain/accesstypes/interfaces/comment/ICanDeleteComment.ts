import { IID } from '@domain/types/IID';
import { IComment } from '@domain/entities/IComment';
import { ICallback } from '../ICallback';

export interface ICanDeleteComment<TID = IID, TComment = IComment, TReturn = boolean | null> {
    deleteCommentById(id: TID, callback?: ICallback<TReturn>): Promise<TReturn>;
    deleteComment(comment: TComment, callback?: (back: TReturn) => void): Promise<TReturn>;
}