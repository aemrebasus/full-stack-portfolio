import { Injectable } from '@angular/core';
import { IProject } from '@app/shared/datamodel/IProject';
import { IUser } from '@app/shared/datamodel/IUser';
import { IIssue } from '@app/shared/datamodel/IIssue';
import { HttpService } from '@services/http/http.service';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private storage: IStorage = {};


  constructor(private httpService: HttpService) {
  }

  public getCurrentProject() {
    return this.storage.currentProject;
  }

  public setCurrentProject(projectName: string) {
    this.storage.currentProject = this.storage.projects.find(e => e.name === projectName);
  }

  updateStorage() {
    this.update<IProject>('/api/v1/projects/all', 'projects');
    this.update<IIssue>('/api/v1/issues/all', 'issues');
    this.update<IUser>('/api/v1/users/all', 'users');
    return this;
  }

  public getProjects() {
    return this.storage.projects;
  }

  public getIssues() {
    return this.storage.issues;
  }

  public getUsers() {
    return this.storage.users;
  }

  private update<T>(path: string, storageName: string) {
    this.httpService.get<T[]>(path)
      .subscribe(
        response => {
          console.log(response)
          this.storage[storageName] = response;
        },
        err => {
          console.log(err);
        }
      );
  }

}

interface IStorage {
  currentProject?: IProject;
  currentUser?: IUser;
  currentIssue?: IIssue;

  projects?: IProject[];
  users?: IUser[];
  issues?: IIssue[];
}

