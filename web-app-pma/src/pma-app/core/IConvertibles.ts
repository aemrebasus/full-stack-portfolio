import { IFormView, IFormControl } from './views/IFormView';
import { ICardView } from './views/ICardView';
import { ITableView } from './views/ITableView';
import { ISelectDialogView } from './views/ISelectDialogView';
import { IListView, IListItem } from './views/IListView';
import { INavbarItem } from './views/INavbarItem';
import { Routes } from '@angular/router';


export interface IConvertibleListView<DataType> {

    /**
     * implement this to pass data to the list-view component
     * @param data Array of entity
     */
    toListView(data?: DataType[]): IListView;
}

export interface IConvertibleListItem<DataType> {
    /**
     * implement this to create list item
     * @param data single item
     */
    toListItem(data?: DataType): IListItem;
}

export interface IConvertibleForm<DataType, EventTypes, Payload, ViewMeta> {
    /**
     * implement this to pass data to reactive-form component
     * @param data list of items
     * @param eventType type of event when the form submitted (the event will be resolved by the state's dispatch method!)
     */
    toFormView(data?: DataType[], eventType?: EventTypes): IFormView<DataType, EventTypes, Payload, ViewMeta>;
}

export interface IConvertibleFormControl {
    toFormInput(): IFormControl;
}

export interface IConvertibleCardView<DataType> {
    /**
     * implement this to pass data to single-view component
     * @param data single item
     */
    toCardView(data?: DataType): ICardView;
}


export interface IConvertibleTableView<DataType> {
    /**
     * implement this to pass data to the table-view
     * @param data list of items
     */
    toTableView(data?: DataType[]): ITableView<DataType>;
}

export interface IConvertibleSelectDialogView<DataType, Meta> {
    /**
     * implement this to pass data to the dialog component
     * @param data list of items
     */
    toSelectDialogView(data?: DataType[]): ISelectDialogView<DataType, Meta>;
}

export interface IConvertibleNavBarItem {
    /**
     * implement this to create navbar items from the entity
     */
    toNavbarItem(): INavbarItem;
}

export interface IConvertibleRoute {
    /**
     * implement this to create corresponding routes for the entitity
     */
    toRoute(): Routes;
}




