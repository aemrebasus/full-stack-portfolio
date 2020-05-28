import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { IFormView } from '@pma-core/views/IFormView';
import { IProject } from '@pma-entity-modules/IEntities';
import { ISelectDialogView, ISelectDialogInput } from '@pma-core/views/ISelectDialogView';
import { of, Observable } from 'rxjs';
import { IEventTypes } from '@pma-core/state/IEventTypes';
import { IEventArgument } from '@pma-core/state/IEventArgument';
import { StateService } from '@pma/state/applicatin.state';


export const projectNavbar = (router: Router) => ({
    path: 'Project',
    subs: [
        {
            path: 'Create Project',
            onClick: () => router.navigate([router.url, 'project', 'create-project']),
        },
        {
            path: 'Update Project',
            onClick: () => router.navigate([router.url, 'project', 'update-project']),
        },
        {
            path: 'Delete Project',
            onClick: () => router.navigate([router.url, 'project', 'delete-project']),
        },

        {
            path: 'Open Project',
            onClick: () => router.navigate([router.url, 'project', 'open-project']),
        }
    ]
});







@Injectable({
    providedIn: 'any'
})
export class ProjectResolver implements
    Resolve<
    IFormView<IProject, IProject>
    | ISelectDialogView<ISelectDialogInput>
    > {

    constructor(private stateService: StateService) {

    }



    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
        IFormView<IProject, IProject> | ISelectDialogView<ISelectDialogInput> |
        Observable<IFormView<IProject, IProject> | ISelectDialogView<ISelectDialogInput>> |
        Promise<IFormView<IProject, IProject> | ISelectDialogView<ISelectDialogInput>> {

        switch (route.routeConfig.path as IEventTypes) {



            case 'create-project':

                const createProject: IFormView<IProject, IProject> = {
                    meta: {
                        title: 'Create Project',
                        submitLabel: 'Save',
                        bgColor: 'success',
                        submit: 'create-project'
                    },
                    events: {
                        submit: (event: IEventArgument<IProject>) => {
                            this.stateService.dispatch({
                                type: 'create-project',
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
                    ]
                };

                return of(createProject);


            case 'update-project':

                const updateProject: IFormView<IProject, IProject> = {
                    meta: {
                        title: 'Update Project',
                        submitLabel: 'update',
                        bgColor: 'warning',
                        textColor: 'dark',
                        submit: 'update-project'
                    },
                    events: {
                        submit: (event: IEventArgument<IProject>) => {
                            this.stateService.dispatch({
                                type: 'update-project',
                                paylaod: event.paylaod
                            });
                        }
                    },
                    inputs: [
                        {
                            type: 'text', name: 'id', label: 'ID', placeholder: 'project id', visible: false
                        },
                        {
                            type: 'text', name: 'name', label: 'Name', placeholder: 'project Name',
                            validators: [(c) => (c.value.length < 2) ? ({ minLength: true }) : null]
                        },
                        {
                            type: 'text', name: 'summary', label: 'Summary', placeholder: 'project Summary',
                            validators: [(c) => (c.value.length < 3) ? ({ minLength: true }) : null]
                        },
                    ],
                    data: this.stateService.getCurrentProject()
                };

                return of(updateProject);








            case 'delete-project':
                const deleteProject: ISelectDialogView<ISelectDialogInput> = {
                    meta: {
                        title: 'Delete Project',
                        submitLabel: 'Delete',
                        bgColor: 'danger',
                        submit: 'delete-project'
                    },
                    data: this.stateService.getProjects().map(e => ({
                        id: e.meta.id,
                        name: e.name
                    })),
                    events: {
                        submit: (event: IEventArgument<ISelectDialogInput>) => {
                            this.stateService.dispatch({
                                type: 'delete-project',
                                paylaod: event.paylaod
                            })
                        }
                    },
                    input: { type: 'text', placeholder: '....', validators: [(c) => c.value.length > 3 ? null : { minLength: true }] }


                };

                return of(deleteProject);




            case 'open-project':
                const openProject: ISelectDialogView<IProject> = {
                    meta: {
                        title: 'Open Project',
                        submitLabel: 'Open Project',
                        bgColor: 'info',
                        submit: 'open-project',
                    },
                    input: {
                        type: 'text', placeholder: '....', validators: [(c) => c.value.length > 3 ? null : { minLength: true }]
                    },
                    events: {
                        submit: (event: IEventArgument<ISelectDialogInput>) => {
                            this.stateService.dispatch({
                                type: 'open-project',
                                paylaod: event.paylaod
                            });
                        }
                    },
                    data: this.stateService.getProjects().map(e => ({
                        id: e.meta.id,
                        name: e.name
                    }))
                };

                return of(openProject);


        }

    }


}






