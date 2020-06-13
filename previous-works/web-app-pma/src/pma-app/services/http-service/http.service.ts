import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PROJECTS, ISSUES, USERS } from './route-map';
import { environment } from 'src/environments/environment';

import { IProject, IUser, IIssue } from '../../entities/IEntities';
import { lorem, random, } from 'faker';

import { of } from 'rxjs';

@Injectable({
  providedIn: 'any'
})
export class HttpClientService {

  constructor(private client: HttpClient) { }

  private get<T>(path: string, someData: T) {
    // if (environment.production) {
    // return this.client.get<T>(path);
    // } else {
    return of(someData);
    // }
  }


  projects() {
    return this.get<IProject[]>(PROJECTS, [
      {
        meta: { orgId: 1, current: true },
        id: 1,
        name: 'Project 1',
        summary: 'Summary of the project 1'
      },
      {
        meta: { id: 2, orgId: 1, },
        id: 2,
        name: 'Project 2',
        summary: 'Summary of the project 2'
      },
      {
        meta: { orgId: 1, },
        id: 3,
        name: 'Project 3',
        summary: 'Summary of the project 2'
      },

    ]);
  }

  issues() {

    const arr = new Array(100);
    arr.fill('');

    const statuses = ['todo', 'inprogress', 'done']
    const tags = ['enhancement', 'bug', 'todo', 'feature', 'inprogress', 'done'];

    return this.get<IIssue[]>(ISSUES,
      arr.map(__ => {

        const _arr = new Array(random.number(4));

        return {
          meta: {
            orgId: 1,
            projectId: random.number(3),
            tags: [tags[random.number(5)], tags[random.number(5)]],
            status: statuses[random.number(2)],
          },
          id: random.uuid(),
          title: lorem.words(2),
          description: lorem.sentence(4),
        }

      })

    );
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
