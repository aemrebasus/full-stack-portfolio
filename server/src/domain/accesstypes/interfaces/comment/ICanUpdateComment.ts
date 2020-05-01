import { IID } from '@domain/types/IID';
import { IComment } from '@domain/entities/IComment';

export interface ICanUpdateComment<TID = IID, TComment = IComment, TReturn = boolean> {
    updateCommentById(id: TID, updatedComment: TComment, callback?: (back: TReturn) => void): Promise<TReturn>;
}
