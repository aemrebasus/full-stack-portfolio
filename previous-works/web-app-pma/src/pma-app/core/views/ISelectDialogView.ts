
import { IFormControl } from './IFormView';
import { IViewMeta } from './IViewMeta';
import { IEventHandlers } from '@pma-core/state/IEventHandlers';

export interface ISelectDialogView<Payload> {
    meta: IViewMeta;
    input: IFormControl;
    events: IEventHandlers<Payload>;
    data: ISelectDialogInput[];
}

export interface ISelectDialogInput {
    id?: string | number;
    name?: string;
}