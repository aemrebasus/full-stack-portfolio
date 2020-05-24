import { IIssue, IProject, IUser, IComment, IOrganization } from './IEntities';

export interface IEntityAll extends IIssue, IProject, IUser, IComment, IOrganization { }