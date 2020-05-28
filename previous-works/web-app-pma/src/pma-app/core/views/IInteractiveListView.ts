import { IViewMeta } from './IViewMeta';
import { IEventHandlers } from '@pma-core/state/IEventHandlers';

export interface IInteractiveListView {
    meta?: IViewMeta;
    events?: IEventHandlers<IListItem>;
    data?: IListItem[] | any;
}

export interface IListView {

    /**
     * list title
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


