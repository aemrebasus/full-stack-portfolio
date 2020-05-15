import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ProjectService } from '../project.service';
import { LoggerService } from '../../../services/logger/logger.service';
import { IProjectResolved } from '../interfaces';


@Injectable({
  providedIn: 'root'
})
export class ProjectResolverService implements Resolve<IProjectResolved> {

  constructor(private projectService: ProjectService, private logger: LoggerService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    IProjectResolved | Observable<IProjectResolved> | Promise<IProjectResolved> {

    const id = +route.paramMap.get('_id');

    if (isNaN(id)) {
      return {
        project: null,
        error: 'Id is invalid!'
      };

    } else {

      this.projectService.getById(id)
        .pipe(
          map(p => ({ project: p, error: null })),
          catchError(err => {
            this.logger.errProjectRetrival(id, new Error(err));
            return of({ project: null, error: err });
          })
        );


    }


  }


}

