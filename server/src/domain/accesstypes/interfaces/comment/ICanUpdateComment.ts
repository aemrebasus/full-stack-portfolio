import { IID } from '@domain/types/IID';
import { IComment } from '@domain/entities/IComment';
import { ICallback } from '../ICallback';

export interface ICanUpdateComment<TID = IID, TComment = IComment, TReturn = boolean> {
    updateCommentById(id: TID, updatedComment: TComment, callback?: ICallback<TReturn>): Promise<TReturn>;
}
