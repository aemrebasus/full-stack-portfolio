import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PROJECTS, ISSUES, USERS } from './route-map';
import { environment } from 'src/environments/environment';

import { IProject, IUser, IIssue } from '../../core/IEntities';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'any'
})
export class HttpClientService {

  constructor(private client: HttpClient) { }

  get<T>(path: string, someData: T) {
    if (environment.production) {
      return this.client.get<T>(path);
    } else {
      return of(someData);
    }
  }


  projects() {
    return this.get<IProject[]>(PROJECTS, [
      {
        meta: { id: 1, orgId: 1, current: true },
        name: 'Project 1',
        summary: 'Summary of the project 1'
      },
      {
        meta: { id: 2, orgId: 1, },
        name: 'Project 2',
        summary: 'Summary of the project 2'
      },
      {
        meta: { id: 3, orgId: 1, },
        name: 'Project 3',
        summary: 'Summary of the project 2'
      },

    ]);
  }

  issues() {
    return this.get<IIssue[]>(ISSUES, [
      {
        meta: { id: 1, orgId: 1, projectId: 1, tags: ['enhancement', 'bug', 'todo', 'feature'], status: 'todo' },
        title: 'First issue',
        description: ' First Description',
      },
      {
        meta: { id: 2, orgId: 1, projectId: 1, tags: ['enhancement', 'bug', 'todo', 'feature'], status: 'todo' },
        title: 'Second issue',
        description: ' Second Description',
      },
      {
        meta: { id: 3, orgId: 1, projectId: 1, tags: ['enhancement', 'bug', 'todo', 'feature'], status: 'todo' },
        title: 'Third issue',
        description: ' Third Description',
      },
      {
        meta: { id: 4, orgId: 1, projectId: 2, tags: ['enhancement', 'bug', 'todo', 'feature'], status: 'todo' },
        title: 'Furth Issue',
        description: 'Second Description',
      },
      {
        meta: { id: 5, orgId: 1, projectId: 2, tags: ['enhancement', 'bug', 'todo', 'feature'], status: 'todo' },
        title: 'Fifth Issue',
        description: 'THird Description',
      },

    ]);
  }

  users() {
    return this.get<IUser[]>(USERS, [
      {
        meta: { id: 1, orgId: 1, },
        email: 'aemreabasus@gmail.com',
        firstName: 'Ahmet',
        lastName: 'Emrebas',
        role: 'Admin',
      },
      {
        meta: { id: 2, orgId: 1, },
        email: 'onurer@gmail.com',
        firstName: 'Onur',
        lastName: 'Er',
        role: 'Developer',
      }
    ])
  }

}
