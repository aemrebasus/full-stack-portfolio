import { Injectable } from '@angular/core';
import { IProject, IIssue, IUser, IEntity } from '@pma-entity-modules/IEntities';
import { HttpClientService } from '@pma-services/http-service/http.service';
import { IEventArgument } from '@pma/core/state/IEventArgument';
import { IStateHandler } from '@pma-core/state/IStateHandler';



@Injectable({
    providedIn: 'any'
})
export class StateService implements IStateHandler<IEventArgument<any>> {

    private state: IApplicationState = {
        currentIssue: null,
        currentProject: null,
        issues: null,
        projects: null,
        userRole: null,
        users: null
    };


    constructor(private httpService: HttpClientService) {

        this.httpService.projects().subscribe(_projects => {
            this.state.projects = _projects;
        });

        this.httpService.issues().subscribe(_issues => {
            this.state.issues = _issues;
        });

    }

    dispatch(event: IEventArgument<any>) {
        switch (event.type) {


            case 'open-project':
                console.log('Opening Project....')
                this.setCurrentProject(this.getProjectByName(event.paylaod.name));
                this.getIssues();
                break;


            case 'create-project':
                console.log('Creating Project....')
                this.createProject({
                    meta: {
                        id: Math.floor(Math.random() * 10000000000 + 99999999999)
                    },
                    ...event.paylaod
                });
                break;

            case 'update-project':
                console.log('Updating project')
                this.updateProject(event.paylaod);
                break;
        }
    }

    createProject(project: IProject) {
        this.setProjects([...this.getProjects(), project]);

    }

    updateProject(project: IProject) {
        console.log(project)
    }


    getProjects() {
        if (this.state.projects && this.state.projects.length >= 0) {
            return this.state.projects;
        } else {
            this.httpService.projects().subscribe(_projects => {
                this.state.projects = _projects;
                this.getProjects();
            });
        }
    }

    getProjectByName(name: string) {
        return this.getProjects().find(p => p.name == name);
    }


    setProjects(projects: IProject[]) {
        this.state.projects = projects;
    }

    getIssues() {
        const result = this.state.issues.filter(i => this.getCurrentProject().meta.id === i.meta.projectId);
        console.log(result);
        return result;
    }

    setIssues(issues: IIssue[]) {
        this.state.issues = issues;
    }




    getUsers() {
        return this.state.users;
    }

    setUsers(users: IUser[]) {
        this.state.users = users;
    }


    getCurrentIssue() {

        return this.state.currentIssue;
    }

    setCurrentIssue(issue: IIssue) {
        this.state.currentIssue = issue;
    }

    getCurrentProject() {
        if (this.state.currentProject) {
            return this.state.currentProject;
        } else {
            this.setCurrentProject(this.getProjects()[0]);
            this.getCurrentProject();
        }
    }

    setCurrentProject(project: IProject) {
        this.state.currentProject = project;
    }



}

export interface IApplicationState {
    projects?: IProject[];
    issues?: IIssue[];
    users?: IUser[];

    currentProject?: IProject;
    currentIssue?: IIssue;
    userRole?: IUserRole;

}


type IUserRole = 'admin' | 'developer' | 'scrummaster';







