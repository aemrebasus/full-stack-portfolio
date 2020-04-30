import { UserInterface } from './User';

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
    userId?: any;
    comment?: string;
    createdOn?: string;
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
    _id?: string;
    title?: string;
    description?: string;
    status?: string;
    assignee?: UserInterface;
    createdOn?: string;
    comments?: CommentInterface[];
}
