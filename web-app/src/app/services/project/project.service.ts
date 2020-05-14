import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProject } from 'src/app/shared/interfaces/IProject';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projectData: IProject[];
  private projects: Observable<IProject[]>;


  constructor() {

    this.projectData = new Array<IProject>(10).fill(null);
    this.projectData = this.projectData.map(e => {
      const d: IProject = {
        _id: '' + (Math.random() * 9872978323 + 4822342423),
        name: 'Some name',
        summary: 'Summaries'
      };
      return d;
    });

    this.projects = new Observable((observer) => {
      observer.next(this.projectData);

      return {
        unsubscribe() {

        }
      };
    });

  }

  createProject(project: IProject) {
    return new Promise((res, resj) => {
      setTimeout(() => {
        this.projectData.push(project);
        res('Project successfully created');
      }, 1000);
    });
  }

  getProjects() {
    return this.projects;
  }


  deleteProjetById(id: string) {
    return new Promise((res, rej) => {
      setTimeout(() => {
        const e = this.projectData.find(e => e._id === id);
        if (e) {
          delete this.projectData[this.projectData.indexOf(e)];
          res('Deleted')
        } else {
          rej('Could not find the item in projects');
        }
      }, 1000);
    });
  }


  updateProject(project: IProject) {
    return new Promise((res, rej) => {

      const e = this.projectData.find(e => e._id === project._id);
      if (e) {
        e.name = project.name;
        e.summary = project.summary;
        res('Successfully updated');
      } else {
        rej('Could not find the item in the projects.')
      }

    });
  }



}








