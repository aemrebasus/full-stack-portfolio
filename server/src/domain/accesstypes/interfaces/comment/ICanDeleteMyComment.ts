import { IID } from '@domain/types/IID';
import { IComment } from '@domain/entities/IComment';
import { ICallback } from '../ICallback';

export interface ICanDeleteMyComment<TID = IID, TComment = IComment, TReturn = boolean | null> {
    deleteOwnCommentById(id: TID, callback?: ICallback<TReturn>): Promise<TReturn>;
    deleteOwnComment(comment: TComment, callback?: ICallback<TReturn>): Promise<TReturn>;
}