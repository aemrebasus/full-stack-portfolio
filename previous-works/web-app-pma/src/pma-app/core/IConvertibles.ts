import { IFormView, IFormControl } from './views/IFormView';
import { ICardView } from './views/ICardView';
import { ITableView } from './views/ITableView';
import { ISelectDialogView } from './views/ISelectDialogView';
import { INavbarItem } from './views/INavbarItem';
import { Routes } from '@angular/router';
import { IInteractiveListView, IListView, IListItem } from './views/IInteractiveListView';
import { IEventTypes } from './state/IEventTypes';


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

export interface IConvertibleInteractiveListView<Payload> {
    /**
     * This list view has handlers as different from the regular list view.
     */
    toInteractiveListView(data?: IListItem[], eventType?: IEventTypes): IInteractiveListView;
}

export interface IConvertibleInteractiveListItem {
    toInterActiveListItem(): IListItem;
}

export interface IConvertibleForm<DataType, Payload> {
    /**
     * implement this to pass data to reactive-form component
     * @param data list of items
     * @param eventType type of event when the form submitted (the event will be resolved by the state's dispatch method!)
     */
    toFormView(data?: DataType[], eventType?: IEventTypes): IFormView<DataType, Payload>;
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

export interface IConvertibleSelectDialogView<DataType, Payload> {
    /**
     * implement this to pass data to the dialog component
     * @param data list of items
     */
    toSelectDialogView(data?: DataType[], eventType?: IEventTypes): ISelectDialogView<Payload>;
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




