import { IComment } from '@domain/entities/IComment';
import { ICallback } from '../ICallback';

export interface ICanCreateComment<TComment = IComment, TReturn = boolean> {
    createNewComment(comment: TComment, callback?: ICallback<TReturn>): Promise<TReturn>;
}