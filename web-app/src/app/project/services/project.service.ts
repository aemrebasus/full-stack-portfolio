import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProject } from 'src/app/project/services/interfaces';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {


  private projectData: IProject[];
  private projects: Observable<IProject[]>;
  private basePath = '/api/v1/projects';

  constructor(private httpService: HttpClient) { }

  public get() {
    return this.httpService.get<IProject[]>(this.basePath.concat('/all'));
  }

  public getById(id: number) {
    return this.httpService.get<IProject>(this.basePath.concat(`/${id}`));
  }

  public mock(data): IProject[] {

    if (environment.production) {
      console.log('production service!');
      return null;
    } else {
      console.log('development service!');
      const projects: IProject[] = [
        {
          _id: 1,
          name: 'Awesome One',
          summary: 'Hello there',
          meta: [
            ['Number of issues', '100'],
            ['Todo', '30'],
            ['Inprogress', '70']
          ]
        },
        {
          _id: 2,
          name: 'Interesting Two',
          summary: 'Good morning cici',
          meta: [
            ['Number of issues', '1000'],
            ['Todo', '900'],
            ['Inprogress', '69']
          ]
        },
        {
          _id: 3,
          name: 'Super three',
          summary: 'Go there you little cat.',
          meta: [
            ['Number of issues', '654'],
            ['Todo', '45'],
            ['Inprogress', '63']
          ]
        },
      ];
      return projects;

    }
  }



  filter(projects: IProject[], filterBy: string) {

    const result = projects.filter(p => {
      for (let i of Object.entries(p)) {
        const texts: string[] = i[1].toString().toLowerCase().split(/ |,/g);
        for (let j of texts) {
          console.log(j);
          if (j.startsWith(filterBy.toLowerCase())) {
            return true;
          }
        }
      }
    });

    if (result.length === 0) {
      return projects;
    } else {
      return result;
    }

  }






}








