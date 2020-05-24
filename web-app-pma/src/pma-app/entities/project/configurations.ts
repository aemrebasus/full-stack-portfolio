import { IProject } from '@pma-entity-modules/IEntities';
import { ViewConfiguration, IViewEventArg } from '@pma/core/core';
import { Injectable } from '@angular/core';
import { StateService } from '@pma/state/applicatin.state';


@Injectable({
    providedIn: 'any'
})
export class ProjectConfiguration extends ViewConfiguration<IProject> {

    constructor(public stateService: StateService) {
        super(stateService);
    }

    newProjectForm(): ProjectConfiguration {
        this.configuration = {
            meta: {
                name: 'New Project',
                title: 'New Project',
                bgColor: 'primary',
                submitLabel: 'save',
                textColor: 'dark',
                submit: 'create-project'
            },
            events: {
                submit: (event: IViewEventArg<IProject>) => {
                    this.dispatch({
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

        return this;
    }


    openProjectDialog(): ProjectConfiguration {
        this.configuration = {
            meta: {
                title: 'Open Project',
                bgColor: 'primary',
                submitLabel: 'Open',
                submit: 'open-project'
            },
            inputs: [
                {
                    type: 'text', name: 'name', label: 'Select project', placeholder: 'Select Project'
                },
            ],
            data: this.stateService.getProjects()
        }
        return this;
    }


}

