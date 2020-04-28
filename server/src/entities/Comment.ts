import { mongoose, Schema } from '@mongo';
import { PreUserSchema, UserInterface } from '@entities';

export const PreCommentSchema = {
    user: { type: PreUserSchema, default: 'Unknown', required: true },
    comment: [String],
    createdOn: { type: Date, default: Date.now }
}

export interface CommentInterface {
    user: UserInterface;
    comment: string[];
    createdOn: Date;
}


export const CommentSchema = new Schema(PreCommentSchema)



export const CommentModel = mongoose.model('comments', CommentSchema)


