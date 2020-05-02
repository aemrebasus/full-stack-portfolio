import { IComment } from '@domain/entities/IComment';
import { IID } from '@domain/types/IID';
import { ICallback } from '../ICallback';

export interface ICanViewComment<TID = IID, TComment = IComment, TReturn = TComment> {
    viewCommentById(id: TID, callback?: ICallback<TReturn>): Promise<TReturn>;
    viewAllComments(callback?: ICallback<TReturn[]>): Promise<TReturn[]>;
}