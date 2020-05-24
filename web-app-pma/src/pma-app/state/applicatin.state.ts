import { Injectable } from '@angular/core';
import { IProject, IIssue, IUser, IEntity } from '@pma-entity-modules/IEntities';
import { HttpClientService } from '@pma-services/http-service/http.service';
import { IViewEventArg } from '../core/core';



@Injectable({
    providedIn: 'any'
})
export class StateService {

    private state: IPmaState = {
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
        })

        this.httpService.issues().subscribe(_issues => {
            this.state.issues = _issues;
        })

    }

    dispatch<T>(event: IViewEventArg<T>) {
        switch (event.type) {
            case 'open-project':
                this.setCurrentProject(event.paylaod);
                this.getIssues();
                break;
            case 'create-project':
                this.setProjects([...this.getProjects(), event.paylaod])
                break;
        }
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
            return this.getProjects()[0];
        }
    }

    setCurrentProject(project: IProject) {
        this.state.currentProject = project;
    }



}

interface IPmaState {
    projects?: IProject[];
    issues?: IIssue[];
    users?: IUser[];

    currentProject?: IProject;
    currentIssue?: IIssue;
    userRole?: IUserRole;

}


type IUserRole = 'admin' | 'developer' | 'scrummaster';







