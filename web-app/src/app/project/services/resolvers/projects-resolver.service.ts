import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { IProjectsResolved } from '../../../shared/interfaces/interfaces';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ProjectService } from '../project.service';
import { LoggerService } from 'src/app/services/logger/logger.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectsResolverService implements Resolve<IProjectsResolved> {

  constructor(private projectService: ProjectService, private logger: LoggerService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    IProjectsResolved | Observable<IProjectsResolved> | Promise<IProjectsResolved> {

    return this.projectService.get()
      .pipe(
        map(p => ({ projects: p })),
        catchError(err => {
          this.logger.errProjectRetrival('all', new Error(err));
          return of({ projects: this.projectService.mock(err), error: err });
        })
      );


  }
}
