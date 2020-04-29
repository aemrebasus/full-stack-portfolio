import { mongoose, Schema, Document } from '@mongo';
import { UserInterface } from 'src/models';
import { ObjectID } from 'mongodb';

/**
 * Use `CommentInterface` while creating an instance of `IssueModel` for the benefit of autocomplation.
 * Sample
 * ```
 * const comment:CommentInterface = {
 *   userId:...,
 *   comments:['comment 1 ', 'comment 2', 'commnet 3'],
 * };
 * 
 * const issue:IssueInterface = {
 *      ...,
 *      comments: [comment, ...]
 * };
 * 
 * new IssueModel(issue).save();
 * ```
 */
export interface CommentInterface {
    userId?: ObjectID,
    comments?: string[],
    createdOn?: Date
}



/**
 * Issue interface
 * Sample
 * ```
 * const comment:CommentInterface = {
 *   userId:...,
 *   comments:['comment 1 ', 'comment 2', 'commnet 3'],
 * };
 * 
 * const issue:IssueInterface = {
 *      ...,
 *      comments: [comment, ...]
 * };
 * 
 * new IssueModel(issue).save();
 * ```
 */
export interface IssueInterface {
    title?: string;
    description?: string;
    status?: string;
    assignee?: UserInterface;
    createdOn?: Date;
    comments?: CommentInterface[]
}


/**
 * Issue document class
 */
class IssueDocument extends Document implements IssueInterface {
    constructor(
        public title: string,
        public description: string,
        public status: string,
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
const IssueSchema = new Schema({
    title: { type: String, default: 'Not provided' },
    description: { type: String, default: 'Not provided' },
    status: { type: String, default: 'todo' },
    assignee: { style: ObjectID },
    createdOn: { type: Date, default: Date.now },
    comments: { type: Array<CommentInterface>(), default: [] }
});


/**
 * Issue Model
 */
export const IssueModel = mongoose.model<IssueDocument>('issues', IssueSchema);


