
import { Router, Routes, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import { IEventTypes } from '@pma/core/state/IEventTypes';
import { IProject } from '@pma-entity-modules/IEntities';
import { IConvertibleProject, IProjectStateHandler } from '@pma-entity-modules/ISpecific';
import { IEventArgument } from '@pma-core/state/IEventArgument';
import { StateService } from '@pma/state/applicatin.state';
import { IConvertibleNavBarItem } from '@pma-core/IConvertibles';
import { IViewMeta } from '@pma-core/views/IViewMeta';





// ################################ MODULE NAME (ROUTE FOR THIS MODULE) ###########################################

export const MODULE_NAME = 'project';




// ############################################ EVENTS ###########################################################

export const NEW_PROJECT: IEventTypes = 'create-project';
export const DELETE_PROJECT: IEventTypes = 'delete-project';
export const OPEN_PROJECT: IEventTypes = 'open-project';
export const UPDATE_PROJECT: IEventTypes = 'update-project';




// ############################################ Project Service  ###########################################################

@Injectable({
    providedIn: 'any'
})
export class ProjectService implements
    IConvertibleProject,
    IConvertibleNavBarItem,
    IProjectStateHandler,
    Resolve<any> {


    constructor(private stateService: StateService, private router: Router) { }





    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any |
        import('rxjs').Observable<any> | Promise<any> {


        console.log(route);
        console.log(state);
        switch (route.routeConfig.path as IEventTypes) {

            case 'create-project':
                return of(this.toFormView(null, 'create-project'));
            case 'open-project':
                return of(this.toSelectDialogView(this.stateService.getProjects()));

        }
    }

    toNavbarItem(): import('../../core/views/INavbarItem').INavbarItem {

        const onClose = () => {
            return this.router.navigate(['/pma']);
        };

        return {
            path: MODULE_NAME,
            subs: [
                {
                    path: NEW_PROJECT,
                    onClick: () => this.router.navigate([this.router.url, MODULE_NAME, NEW_PROJECT]),

                },
                {
                    path: OPEN_PROJECT,
                    onClick: () => this.router.navigate([this.router.url, MODULE_NAME, OPEN_PROJECT]),
                    onClose
                }
            ]
        };
    }



    toFormView(data?: IProject[], eventType?: IEventTypes): import('../../core/views/IFormView').IFormView<IProject, IEventTypes, IProject,
        import('../../core/views/IViewMeta').IViewMeta<IEventTypes>,
        import('../../core/state/IEventHandlers').IEventHandlers<IProject, IEventTypes>,
        import('../../core/views/IFormView').IFormControl<import('../../core/views/IStyle').IElementStyle,
        import('@angular/forms').ValidatorFn>> {

        return {
            meta: {
                name: 'New Project',
                title: 'New Project',
                bgColor: 'primary',
                submitLabel: 'save',
                textColor: 'dark',
                submit: eventType
            },
            events: {
                submit: (event: IEventArgument) => {
                    this.dispatch({
                        type: eventType,
                        paylaod: event.paylaod
                    });
                }
            },
            inputs: [
                {
                    type: 'text', name: 'name', label: 'Name', placeholder: 'project Name',
                    validators: [(c) => (c.value.length < 2) ? ({ minLength: true }) : null]
                },
                {
                    type: 'text', name: 'summary', label: 'Summary', placeholder: 'project Summary',
                    validators: [(c) => (c.value.length < 3) ? ({ minLength: true }) : null]
                },
            ],
            data

        };
    }


    toSelectDialogView(data?: IProject[]): import('../../core/views/ISelectDialogView').ISelectDialogView<IProject,
        import('../../core/views/IViewMeta').IViewMeta<IEventTypes>> {
        return {
            meta: {
                title: 'Open Project',
                bgColor: 'primary',
                submitLabel: 'Open',
                submit: 'open-project'
            },
            input: {
                type: 'text', name: 'name', label: 'Select project', placeholder: 'Select Project'
            },
            data: this.stateService.getProjects()
        };
    }


    dispatch(event: import('../../core/state/IEventArgument').IEventArgument<IEventTypes, IProject>): void {
        this.stateService.dispatch(event);
    }


}






// ################################ Project Routes ###########################################

export const projectRoutes: Routes = [
    {
        path: MODULE_NAME,
        children: [
            {
                path: NEW_PROJECT,
                loadChildren: () => import('@shared/tform/tform.module').then(m => m.TformModule),
                resolve: { resolved: ProjectService }
            },
            {
                path: OPEN_PROJECT,
                loadChildren: () => import('@shared/tdialog/tdialog.module').then(m => m.TdialogModule),
                resolve: { resolved: ProjectService }
            }
        ]
    }
];
