import { IViewFormInput, IListView } from './core';

export interface IConvertable {

    /**
     * Convert the item into a list item so that List Component can render it easily
     */
    toListView(): IListView;

    toFormInput(): IViewFormInput;

    toString(): string;
}

