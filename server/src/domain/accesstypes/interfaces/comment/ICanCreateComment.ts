import { IComment } from '@domain/entities/IComment';

export interface ICanCreateComment<TComment = IComment, TReturn = boolean> {
    createNewComment(comment: TComment, callback?: (result: TReturn) => void): Promise<TReturn>;
}