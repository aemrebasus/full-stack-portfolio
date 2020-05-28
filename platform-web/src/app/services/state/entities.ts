export type IID = string | number;

export interface IProject {
    _id: IID;
    organizationId: IID;
    name: string;
}




export type IRole = 'admin' | 'scrummaster' | 'developer' | 'guest';
export interface IUser {
    _id?: IID;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    organizationId: IID;
    role: IRole;
}


export interface ISubscription {
    _id?: IID;
    organizationId?: IID;
    start?: Date;
    end?: Date;
    issueLimit?: number;
    userLimit?: number;

}

export interface IComment {
    _id?: IID;
    userId?: IID;
    organizationId?: IID;
    issueId?: IID;
    content?: string;
    date?: Date;
}


export type IIssueStatus = 'todo' | 'inprogress' | 'done';
export interface IIssue {
    _id?: IID;
    userId?: IID;
    organizationId?: string;
    projectId?: string;
    title?: string;
    description?: string;
    status?: IIssueStatus;
    createdOn?: Date;
}


export interface IOrganization {
    _id?: IID;
    name: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

