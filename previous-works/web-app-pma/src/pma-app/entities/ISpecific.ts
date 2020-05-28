import {
    IConvertibleForm,
    IConvertibleSelectDialogView,
    IConvertibleInteractiveListView,
    IConvertibleNavBarItem
} from '@pma-core/IConvertibles';
import { IProject, IIssue } from './IEntities';
import { IStateHandler } from '@pma-core/state/IStateHandler';
import { ISelectDialogInput } from '@pma-core/views/ISelectDialogView';
import { IListItem } from '@pma-core/views/IInteractiveListView';

/**
 * Interfaces that specific for Project Management application
 */

// ##################### Project ##########################################
export interface IConvertibleProject extends
    IConvertibleForm<IProject, IProject>,
    IConvertibleSelectDialogView<ISelectDialogInput, IProject>,
    IConvertibleNavBarItem,


    IStateHandler<IProject> { }




// ################# ISSUE ################################################

export interface IConvertibleIssue extends
    IConvertibleForm<IIssue, IIssue>,
    IConvertibleInteractiveListView<IIssue>,
    IConvertibleNavBarItem,


    IStateHandler<IIssue> { }





