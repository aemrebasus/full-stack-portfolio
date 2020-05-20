export interface IEntityMeta {
    orgId?: any;
    userId?: any;
    projectId?: any;
    issueId?: string;
    status?: any;
    createdAt?: Date;
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
}
export interface IEntity {
    meta: IEntityMeta;
}
export interface IProject extends IEntity {
    name: string;
    summary: string;
}

export interface IIssue extends IEntity {
    title: string;
    description: string;
}

export interface IOrganization extends IEntity {
    name: string;
}


export interface IUser extends IEntity {
    firstName: string;
    lastName: string;
    email: string;
    role: string;
}

export interface IComment extends IEntity {
    comment: string;
}







