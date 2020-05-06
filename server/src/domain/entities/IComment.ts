import { mongoose, Schema, Document } from '@mongo';
import { IID } from '@domain/entities/IID';

const String = Schema.Types.String;


export interface IComment {
    _id?: IID;
    userId?: IID;
    organizationId?: IID;
    issueId?: IID;
    content?: string;
    date?: Date;
}

class CommentDoc extends Document implements IComment {
    constructor(
        public _id: IID,
        public userId: IID,
        public organizationId: IID,
        public issueId: IID,
        public content: string,
        public date: Date,
    ) {
        super();
    }
}


const CommentSchema = new Schema({
    _id: { type: String, required: true },
    userId: { type: String, required: true },
    organizationId: { type: String, required: true },
    issueId: { type: String, required: true },
    content: { type: String, required: true },
    date: { type: String, required: true }
});

export const CommentModel = mongoose.model<CommentDoc>('comments', CommentSchema)