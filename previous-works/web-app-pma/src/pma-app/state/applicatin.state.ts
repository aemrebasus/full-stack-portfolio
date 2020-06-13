import { Injectable } from '@angular/core';
import { IProject, IIssue, IUser, IEntity } from '@pma-entity-modules/IEntities';
import { HttpClientService } from '@pma-services/http-service/http.service';
import { IEventArgument } from '@pma/core/state/IEventArgument';
import { IStateHandler } from '@pma-core/state/IStateHandler';
import { random } from 'faker';



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
                this.setCurrentProject(this.getProjectByName(event.paylaod.name));
                break;


            case 'create-project':
                console.log('Creating Project....')
                this.createProject({
                    meta: {
                        id: random.uuid()
                    },
                    id: random.uuid,
                    ...event.paylaod
                });
                break;

            case 'update-project':
                this.updateProject(event.paylaod);
                break;


            case 'delete-project':
                this.deleteProject();
                break;


            case 'delete-issue':
                this.deleteIssue(event.paylaod);
                break;
        }
    }

    createProject(project: IProject) {
        this.setProjects([...this.getProjects(), project]);
        this.state.issues.push({
            meta: {
                projectId: project.id
            },
            id: random.uuid(),
            title: 'Initial Task',
            description: 'Initial Task Description'
        });
        this.setCurrentProject(project);
    }

    updateProject(project: IProject) {
        const p = this.getCurrentProject();

        p.name = project.name;
        p.summary = project.summary;
    }

    deleteProject() {

        this.state.projects = this.state.projects.filter(p => p.id !== this.getCurrentProject().id);
        this.setCurrentProject(this.state.projects[0]);
        if (this.state.projects.length === 0) {
            this.createProject({
                id: '0000',
                name: 'Create a project',
                summary: '----------------'
            })
        }
    }


    deleteIssue(issue: IIssue) {
        console.log(issue);
        this.state.issues.find(isu => isu.id == issue.id).meta.status = 'deleted'; 
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
        return this.getProjects().find(p => p.name.toLowerCase() === name.toLowerCase());
    }

    getProjectById(id: string | number) {
        return this.getProjects().find(p => p.id === id);
    }

    setProjects(projects: IProject[]) {
        this.state.projects = projects;
    }

    getIssues(): IIssue[] {
        if (this.getCurrentProject()) {

            const result = this.state.issues.filter(iss => iss.meta.projectId === this.getCurrentProject().id);
            return result;
        } else {
            this.setCurrentIssue(this.getProjects()[0]);
            return this.getIssues();
        }
    }

    getIssueByID(id: string | number): IIssue {
        return this.getIssues().find(i => i.id === id && i.meta.projectId === this.getCurrentProject().id);
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







