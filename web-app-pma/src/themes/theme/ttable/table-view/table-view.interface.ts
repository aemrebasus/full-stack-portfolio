
export interface IViewData {
    /**
     * Inforamtion about the view page like title, name or any thing that related to the template.
     */
    meta: IViewMetaData;

    /**
     * Data that will be rendered with the template.
     */
    data: any[];


    /**
     * Contains user accessability rules
     */
    auth: IAuthMetaData;
}




export interface IViewMetaData {
    /**
     * type of this entity as string
     */
    type?: string;
    /**
     * programatic name
     */
    name?: string;

    /**
     * Title will be shown on the html view page.
     */
    title?: string;

    /**
     * Error message will be shown if any;
     */
    errorMessage?: string;

    /**
     * set this true if the first item in the data set is the description of the table header!!!
     * if false, the first item will be used to generate headers. 
     * !!! it is not a problem if the first item has the most of the fields 
     * !!! if it does not,  view will look a bit weird.
     */
    header?: boolean;


}



export interface IAuthMetaData {
    /**
     * Define the user's authority to manipulate the entity also hide the unauthorized view components like edit button, delete button
     *  'UPDATE' | 'DELETE' | 'VIEW' | 'CREATE' ETC.
     */
    accesses?: (ACCESSES | string)[];



    /**
     * List of services that avalilable for a specific user like searching service.
     */
    services?: (SERVICES | string)[];
}





interface IUserSetting {
    username: string;
    accesses: ACCESSES[];
}


export enum ACCESSES {
    UPDATE = 'UPDATE',
    DELETE = 'DELETE',
    CREATE = 'CREATE',
    VIEW = 'VIEW'
}

export enum SERVICES {
    MESSAGE = 'MESSAGE',
    SEARCH = 'SEARCH'
}




