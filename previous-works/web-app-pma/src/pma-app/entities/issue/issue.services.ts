import { Resolve } from '@angular/router';
import { Routes } from '@angular/router';
import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import { IConvertibleIssue } from '@pma-entity-modules/ISpecific';
import { IIssue } from '@pma-entity-modules/IEntities';
import { IEventTypes } from '@pma-core/state/IEventTypes';
import { IFormView } from '@pma-core/views/IFormView';
import { IInteractiveListView, IListItem } from '@pma-core/views/IInteractiveListView';
import { IEventArgument } from '@pma-core/state/IEventArgument';
import { INavbarItem } from '@pma-core/views/INavbarItem';
import { StateService } from '@pma/state/applicatin.state';





// ################################ MODULE NAME (ROUTE FOR THIS MODULE) ###########################################

export const MODULE_NAME = 'issue';




// ############################################ EVENTS ###########################################################

const NEW_ISSUE: IEventTypes = 'create-issue';
const DELETE_ISSUE: IEventTypes = 'delete-issue';
const OPEN_ISSUE: IEventTypes = 'open-issue';
const UPDATE_ISSUE: IEventTypes = 'update-issue';



@Injectable({
    providedIn: 'any'
})
export class IssueService implements IConvertibleIssue {


    constructor(private stateService: StateService) { }


    toFormView(data?: IIssue[], eventType?: IEventTypes): IFormView<IIssue, IIssue> {

        return {
            meta: {
                title: eventType.toUpperCase().replace(/-/g, ' '),
                submitLabel: eventType.toUpperCase().split('-')[0],
                submit: eventType
            },
            events: {
                submit: (event: IEventArgument<IIssue>) => {
                    this.dispatch({
                        type: eventType,
                        paylaod: event.paylaod
                    });
                }
            },
            data
        }

    }






    dispatch(event: IEventArgument<IIssue>): void {
        this.stateService.dispatch(event);
    }



    toInteractiveListView(data?: IListItem[], eventType?: IEventTypes): IInteractiveListView {
        return {
            meta: {
                title: eventType.toUpperCase().replace(/-/g, ' '),
                submitLabel: eventType.toUpperCase().split('-')[0],
                submit: eventType
            },
            events: {
                submit: (event: IEventArgument<IListItem>) => {

                }
            },
            data
        }
    }


    toNavbarItem(): INavbarItem {
        return {
            path: MODULE_NAME,
            subs: [
                {
                    path: NEW_ISSUE,

                }
            ]
        }
    }

}


export const routes: Routes = [
    {
        path: 'issue', children: [

            {
                path: 'new issue',
                loadChildren: () => import('@shared/tform/tform.module').then(m => m.TformModule),
                resolve: { resolved: null }
            },
            {
                path: 'open issue',
                loadChildren: () => import('@shared/tdialog/tdialog.module').then(m => m.TdialogModule),
                resolve: { resolved: null }
            }
        ]
    }
];
