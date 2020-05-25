import { IConvertibleForm, IConvertibleSelectDialogView } from '@pma-core/IConvertibles';
import { IProject, IIssue } from './IEntities';
import { IEventTypes } from '@pma-core/state/IEventTypes';
import { IStateHandler } from '@pma-core/state/IStateHandler';
import { IEventArgument } from '@pma-core/state/IEventArgument';
import { IViewMeta } from '@pma-core/views/IViewMeta';

/**
 * Interfaces that specific for Project Management application
 */

export interface IConvertibleProject extends
    IConvertibleForm<IProject, IEventTypes, IProject, IViewMeta<IEventTypes>>,
    IConvertibleSelectDialogView<IProject, IViewMeta<IEventTypes>> { }

export interface IConvertibleIssue extends
    IConvertibleForm<IIssue, IEventTypes, IIssue, IViewMeta<IEventTypes>> { }


export interface IProjectStateHandler extends IStateHandler<IEventArgument<IEventTypes, IProject>> { }


