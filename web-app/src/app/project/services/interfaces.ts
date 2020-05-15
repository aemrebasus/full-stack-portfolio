export interface IProject {
    meta?: [string, string][];
    _id: string | number;
    name: string;
    summary: string;

}

export interface IProjectResolved {
    project: IProject;
    error?: any;
}

export interface IProjectsResolved {
    projects?: IProject[];
    error?: any;
}


