import { IID } from '@domain/types/IID';
import { IComment } from '@domain/entities/IComment';

export interface IOwnCommentUpdate<TID = IID, TComment = IComment, TReturn = boolean> {
    updateOwnCommentById(id: TID, updatedComment: TComment, callback?: (back: TReturn) => void): Promise<TReturn>;
}
