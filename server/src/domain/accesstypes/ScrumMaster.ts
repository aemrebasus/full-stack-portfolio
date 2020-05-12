import { Developer } from './Developer';
import { IUser } from '@domain/entities/IUser';
import { UserModel } from '@domain/entities/IUser';
import { ICallback } from './ican/ICallback';
import { ICanViewUser, ICanViewComment, ICanViewIssue, ICanViewProject } from './ican/ICanView';
import { ICanCreateIssue, ICanCreateComment, ICanCreateProject } from './ican/ICanCreate';
import { IIssue, IssueModel } from '@domain/entities/IIssue';
import { IIssueStatus } from '@domain/entities/IIssueStatus';
import { ICanDeleteIssue, ICanDeleteComment } from './ican/ICanDelete';
import { ICanUpdateIssue, ICanUpdateComment } from './ican/ICanUpdate';
import { ICanAssignIssue } from './ican/ICanAssignIssue';
import { CommentModel, IComment } from '@domain/entities/IComment';
import { ProjectModel, IProject } from '@domain/entities/IProject';

export class ScrumMaster extends Developer implements

    ICanCreateProject,
    ICanViewProject,


    ICanCreateIssue,
    ICanDeleteIssue,
    ICanViewIssue,
    ICanUpdateIssue,

    ICanViewUser,
    ICanAssignIssue,

    ICanViewComment,
    ICanCreateComment,
    ICanDeleteComment,
    ICanUpdateComment {


    viewAllProjects(organizationId: string, callback?: ICallback<(IProject | null)[]> | undefined): Promise<(IProject | null)[]> {
        return ProjectModel.find({ organizationId }).then();
    }


    createProject(project: IProject, callback?: ((back: IProject | null) => void) | undefined): Promise<IProject | null> {
        return new ProjectModel(project).save().then();
    }




    viewIssueById(organizationId: string, id: string, callback?: ((data: IIssue | null) => void) | undefined): Promise<IIssue | null> {
        return IssueModel.findOne({ organizationId, _id: id }).then();
    }
    viewIssueByStatus(organizationId: string, status: IIssueStatus, callback?: ((data: IIssue | null) => void) | undefined): Promise<(IIssue | null)[]> {
        return IssueModel.find({ organizationId, status }).then();

    }
    viewAllIssues(organizationId: string, callback?: (issues: IIssue | null) => void): Promise<(IIssue | null)[]> {
        return IssueModel.find({ organizationId }).then();
    }



    updateCommentById(organizationId: string, id: string, updatedComment: IComment, callback?: ICallback<boolean> | undefined): Promise<boolean> {
        return CommentModel.updateOne({ _id: id, organizationId }, { ...updatedComment, _id: id, organizationId }).then();
    }


    deleteCommentById(organizationId: string, id: string, callback?: ICallback<boolean | null> | undefined): Promise<boolean | null> {
        return CommentModel.deleteOne({ _id: id, organizationId }).then();
    }

    deleteComment(organizationId: string, comment: IComment, callback?: ((back: boolean | null) => void) | undefined): Promise<boolean | null> {
        return CommentModel.deleteOne({ _id: comment._id, organizationId }).then();
    }

    createNewComment(comment: IComment, callback?: ICallback<IComment | null> | undefined): Promise<IComment | null> {
        return new CommentModel(comment).save();
    }




    viewCommentById(organizationId: string, id: string, callback?: ICallback<IIssue> | undefined): Promise<IIssue> {
        return CommentModel.findOne({ _id: id, organizationId }).then();
    }
    viewAllComments(organizationId: string, callback?: ICallback<IIssue[]> | undefined): Promise<IIssue[]> {
        return CommentModel.findOne({ _id: organizationId }).then();
    }


    assignIssueToUser(organizationId: string, issue: IIssue, callback?: ((back: boolean | null) => void) | undefined): Promise<boolean | null> {
        return IssueModel.updateOne({ organizationId: issue.organizationId, _id: issue._id }, issue).then();
    }


    dessignIssueFromUser(organizationId: string, issue: IIssue, callback?: ((back: boolean | null) => void) | undefined): Promise<boolean | null> {
        return IssueModel.updateOne({ organizationId: issue.organizationId, _id: issue._id }, { ...issue, userId: 'none' }).then();
    }



    updateIssueById(organizationId: string, id: string, updatedIssue: IIssue, callback?: ((back: boolean) => void) | undefined): Promise<boolean | null> {
        return IssueModel.updateOne({ organizationId, _id: id }, { updatedIssue, organizationId, _id: id }).then();
    }




    deleteIssueById(orgId: string, id: string, callback?: ((back: boolean | null) => void) | undefined): Promise<boolean | null> {
        return IssueModel.findOne({ organizationId: orgId, _id: id }).then();
    }
    deleteIssueByStatus(orgId: string, status: IIssueStatus, callback?: ((back: boolean | null) => void) | undefined): Promise<boolean | null> {
        return IssueModel.findOne({ organizationId: orgId, status }).then();

    }
    deleteIssue(issue: IIssue, callback?: ((back: boolean | null) => void) | undefined): Promise<boolean | null> {
        return IssueModel.deleteOne({ organizationId: issue.organizationId, _id: issue._id }).then();
    }


    createNewIssue(issue: IIssue, callback?: ((back: IIssue) => void) | undefined): Promise<IIssue | null> {
        return new IssueModel(issue).save().then();
    }

    viewUser(user: IUser, callback?: ICallback<IUser | null> | undefined): Promise<IUser | null> {
        return UserModel.findOne({ email: user.email }).then(_user => _user);
    }
    viewUserById(organizationId: string, id: string, callback?: ICallback<IUser> | undefined): Promise<IUser | null> {
        return UserModel.findOne({ organizationId, _id: id }).then(user => user);
    }
    viewUserByEmail(organizationId: string, email: string, callback?: ICallback<IUser | null> | undefined): Promise<IUser | null> {
        return UserModel.findOne({ organizationId, email }).then(user => user);
    }

    viewAllUsers(organizationId: string, callback?: ICallback<IUser[]> | undefined): Promise<(IUser[])> {
        return UserModel.find({ organizationId }).then(users => users);
    }


}