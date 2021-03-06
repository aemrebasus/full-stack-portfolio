/**
 * @id ?: string | number;
 * @orgId ?: any;
 * @userId ?: any;
 * @projectId ?: any;
 * @issueId ?: string;
 * @status ?: any;
 * @createdAt ?: string;
 * @firstName ?: string;
 * @lastName ?: string;
 * @email ?: string;
 * @password ?: string;
 */
export interface IEntityMeta {
    id?: string | number;
    orgId?: any;
    userId?: any;
    projectId?: any;
    issueId?: string;
    status?: any;
    createdAt?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
    current?: boolean;
    tags?: string[];
}

/**
 * @meta ?: IEntityMeta;
 */
export interface IEntity {
    meta?: IEntityMeta;
    id?: string | number;
}

/**
 * @name_ ?: string;
 * @summary ?: string;
 */
export interface IProject extends IEntity {
    name?: string;
    summary?: string;
}


/**
 * @title ?: string;
 * @description ?: string;
 */
export interface IIssue extends IEntity {
    title?: string;
    description?: string;
}

export interface IOrganization extends IEntity {
    name?: string;
}

/**
 * @firstName ?: string;
 * @lastName ?: string;
 * @email ?: string;
 * @role ?: string;
 */
export interface IUser extends IEntity {
    firstName?: string;
    lastName?: string;
    email?: string;
    role?: string;
}

/**
 * @comment ?: string;
 */
export interface IComment extends IEntity {
    comment?: string;
}



/**
 * @description Includes all fields inside the entities. It helps me to create an abstract class with some implementation!
 */
export interface IEntityAll extends IIssue, IProject, IUser, IComment, IOrganization { }



