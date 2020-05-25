export interface IListView {

    /**
     * List title
     */
    title?: string;

    /**
     * list data
     */
    data?: IListItem[];

}


export interface IListItem {
    id?: any;
    values?: string[];
    tags?: string[];
}


