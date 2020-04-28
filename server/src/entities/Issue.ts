import { mongoose, Schema, Document } from '@mongo';
import { PreUserSchema, UserInterface, PreCommentSchema, CommentInterface } from '@entities';

/**
 * Status types
 */
enum STATUS_TYPES {
    'todo', 'inprogress', 'done'
}

/**
 * Issue schema helper
 */
export const PreIssueSchema = {
    title: { type: String, default: 'Undifined' },
    description: { type: String, default: 'Undifined' },
    status: { type: STATUS_TYPES, default: 'todo' },
    assignee: PreUserSchema,
    createdOn: { type: Date, default: Date.now },
    comments: [PreCommentSchema]
}

/**
 * Issue interface
 */
export interface IssueInterface {
    title: string;
    description: string;
    status: STATUS_TYPES;
    assignee: UserInterface;
    createdOn: Date;
    comments: CommentInterface[]
}


/**
 * Issue document class
 */
export class IssueDocument extends Document implements IssueInterface {
    constructor(
        public title: string,
        public description: string,
        public status: STATUS_TYPES,
        public assignee: UserInterface,
        public createdOn: Date,
        public comments: CommentInterface[]
    ) {
        super();
    }
}


/**
 * Issue Schema
 */
export const IssueSchema = new Schema(PreIssueSchema);


/**
 * Issue Model
 */
export const IssueModel = mongoose.model<IssueDocument>('issues', IssueSchema);


