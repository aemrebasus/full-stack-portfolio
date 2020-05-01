import { IID } from '.@domain/types/IID';
import { IComment } from '@domain/entities/IComment';

export interface ICanViewComment<TID = IID, TComment = IComment> {
    viewCommentById(id: TID, callback?: (comment: TComment) => void): Promise<TComment>;
    viewAllComments(callback?: (comment: TComment) => void): Promise<TComment[]>;
}