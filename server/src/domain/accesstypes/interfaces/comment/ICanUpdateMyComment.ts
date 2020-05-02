import { IID } from '@domain/types/IID';
import { IComment } from '@domain/entities/IComment';
import { ICallback } from '../ICallback';

export interface IOwnCommentUpdate<TID = IID, TComment = IComment, TReturn = boolean> {
    updateOwnCommentById(id: TID, updatedComment: TComment, callback?: ICallback<TReturn>): Promise<TReturn>;
}
