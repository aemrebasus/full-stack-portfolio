import { UserRouter } from './UserRouter';
import { IssueRouter } from './IssueRouter';
import { SignInUpOut } from './SignInUpOut';
import { CommentRouter } from './CommentRouter';
import { ProjectRouter } from './ProjectRouter';

export const routers = [
    UserRouter,
    CommentRouter,
    IssueRouter,
    SignInUpOut,
    ProjectRouter
]

