import { mongoose, Schema } from '@mongo';


const CommentSchema = new Schema({
    _id: { type: String, required: true },
    userId: { type: String, required: true },
    issueId: { type: String, required: true },
    content: { type: String, required: true },
    date: { type: String, required: true }
});

export const CommentModel = mongoose.model('comments', CommentSchema)