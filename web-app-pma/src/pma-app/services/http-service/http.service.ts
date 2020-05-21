import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PROJECTS, ISSUES, USERS } from './route-map';
import { environment } from 'src/environments/environment';

import { IProject, IUser, IIssue } from '../interfaces/IEntities';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  private client: HttpClient;

  constructor() {
    this.client = new HttpClient(null);

  }

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
        meta: { id: 1, orgId: 1, },
        name: 'Project 1',
        summary: 'Summary of the project 1'
      },
      {
        meta: { id: 2, orgId: 1, },
        name: 'Project 2',
        summary: 'Summary of the project 2'
      },

    ]);
  }

  issues() {
    return this.get<IIssue[]>(ISSUES, [
      {
        meta: { id: 1, orgId: 1, projectId: 1 },
        title: 'First issue',
        description: ' First Description',
      },
      {
        meta: { id: 2, orgId: 1, projectId: 1 },
        title: 'Second Issue',
        description: 'Second Description',
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
        meta: { id: 1, orgId: 1, },
        email: 'onurer@gmail.com',
        firstName: 'Onur',
        lastName: 'Er',
        role: 'Developer',
      }
    ])
  }

}
