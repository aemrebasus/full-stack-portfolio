export interface IProject extends IEntity {
    name?: string;
    summary?: string;
}

export interface IProjectResolved {
    project?: IProject;
    error?: any;
}
export interface IProjectsResolved {
    projects?: IProject[];
    error?: any;
}

export interface IEntity {
    meta?: {};
    _id?: string | number;
}

export interface IPageMeta<T = any> {
    meta?: {
        errorMessage?: string;
        pageTitle?: string;
    };
    data?: T[];
}





