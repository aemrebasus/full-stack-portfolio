/**
 * Implements these interfaces if the entity will be rendered with the corresponding element type.
 */


import { IFormView, IFormControl } from './views/IFormView';
import { ICardView } from './views/ICardView';
import { ITableView } from './views/ITableView';
import { ISelectDialogView } from './views/ISelectDialogView';
import { IListView, IListItem } from './views/IListView';

export interface IConvertibleListView {
    toListView(): IListView;
}

export interface IConvertibleListItem {
    toListItem(): IListItem;
}

export interface IConvertibleForm<EventTypes, Payload> {
    toFormView(): IFormView<EventTypes, Payload>;
}

export interface IConvertibleFormControl {
    toFormInput(): IFormControl;
}

export interface IConvertibleCardView {
    toCardView(): ICardView;
}


export interface IConvertibleTableView<DataType> {
    toTableView(): ITableView<DataType>;
}

export interface IConvertibleSelectDialogView {
    toSelectDialogView(): ISelectDialogView;
}


