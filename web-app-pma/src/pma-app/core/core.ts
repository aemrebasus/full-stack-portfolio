import {
    IConvertibleForm,
    IConvertibleCardView,
    IConvertibleListView,
    IConvertibleSelectDialogView,
    IConvertibleTableView,
    IConvertibleListItem,
    IConvertibleFormControl
} from './elements/IConvertibles';

import { IStateHandler } from './state/IStateHandler';
import { IEventArgument } from './state/IEventArgument';


/**
 * Services of each entity will extend this abstract class
 */
export interface IEntityService<DataType, EventTypes, Payload>
    extends IConvertibleForm<EventTypes, Payload>, IStateHandler<IEventArgument<EventTypes, Payload>>,
    IConvertibleCardView,
    IConvertibleListView,
    IConvertibleSelectDialogView,
    IConvertibleTableView<DataType> {


    toSelectDialogView(): import('./elements/views/ISelectDialogView').ISelectDialogView;



    toTableView(): import('./elements/views/ITableView').ITableView<DataType>;



    toListView(): import('./elements/views/IListView').IListView;



    toCardView(): import('./elements/views/ICardView').ICardView;



    toFormView(): import('./elements/views/IFormView').IFormView < EventTypes, Payload, null,
        import('./elements/views/IViewMeta').IViewMeta < EventTypes >,
        import('./state/IEventHandlers').IEventHandlers < EventTypes, Payload >,
        import('./elements/views/IFormView').IFormControl < import('./elements/views/IStyle').IElementStyle,
        import('@angular/forms').ValidatorFn >>;



    dispatch(event: IEventArgument<EventTypes, Payload>): void;

}

export abstract class EntityService<DataType, EventTypes, Payload>
    implements
    IEntityService<DataType, EventTypes, Payload>,
    IStateHandler<IEventArgument<EventTypes, Payload>> {

    constructor(private state: IStateHandler<IEventArgument<EventTypes, Payload>>) { }

    toSelectDialogView(): import('./elements/views/ISelectDialogView').ISelectDialogView {
        throw new Error('Method not implemented.');
    }
    toTableView(): import('./elements/views/ITableView').ITableView<DataType> {
        throw new Error('Method not implemented.');
    }
    toListView(): import('./elements/views/IListView').IListView {
        throw new Error('Method not implemented.');
    }
    toCardView(): import('./elements/views/ICardView').ICardView {
        throw new Error('Method not implemented.');
    }
    toFormView(): import('./elements/views/IFormView').IFormView<EventTypes, Payload, null,
        import('./elements/views/IViewMeta').IViewMeta<EventTypes>,
        import('./state/IEventHandlers').IEventHandlers<EventTypes, Payload>,
        import('./elements/views/IFormView').IFormControl<import('./elements/views/IStyle').IElementStyle,
        import('@angular/forms').ValidatorFn>> {
        throw new Error('Method not implemented.');
    }
    dispatch(event: IEventArgument<EventTypes, Payload>): void {
        this.state.dispatch(event);
    }

}


/**
 * Entities will implements this interface
 */
export interface IEntityConvertable extends
    IConvertibleListItem,
    IConvertibleFormControl {

    toListItem(): import('./elements/views/IListView').IListItem;

    toFormInput(): import('./elements/views/IFormView').IFormControl<import('./elements/views/IStyle').IElementStyle,
        import('@angular/forms').ValidatorFn>;

}



