import {
    IConvertibleForm,
    IConvertibleCardView,
    IConvertibleListView,
    IConvertibleSelectDialogView,
    IConvertibleTableView,
    IConvertibleNavBarItem,
    IConvertibleRoute
} from './IConvertibles';

import { IStateHandler } from './state/IStateHandler';
import { IEventArgument } from './state/IEventArgument';
import { IViewMeta } from './views/IViewMeta';


/**
 * Services of each entity will extend this abstract class
 */
export interface IEntityService<DataType, EventType, Payload>
    extends
    IConvertibleForm<DataType, EventType, Payload, IViewMeta<EventType>>,
    IConvertibleCardView<DataType>,
    IConvertibleListView<DataType>,
    IConvertibleSelectDialogView<DataType, IViewMeta<EventType>>,
    IConvertibleTableView<DataType>,
    IConvertibleNavBarItem,
    IConvertibleRoute,
    IStateHandler<IEventArgument<EventType, Payload>> { }


