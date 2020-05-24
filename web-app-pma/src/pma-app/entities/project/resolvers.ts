import { Resolve } from '@angular/router';
import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import { ProjectConfiguration } from './configurations';


@Injectable({
    providedIn: 'root'
})
export class ProjectFormResolver implements Resolve<any> {

    constructor(private configuration: ProjectConfiguration) { }

    resolve(route: import('@angular/router').ActivatedRouteSnapshot, state: import('@angular/router').RouterStateSnapshot) {
        return of(this.configuration.newProjectForm());
    }

}


@Injectable({
    providedIn: 'root'
})
export class ProjectDialogResolver implements Resolve<any> {
    constructor(private configuration: ProjectConfiguration) { }

    
    resolve(route: import('@angular/router').ActivatedRouteSnapshot, state: import('@angular/router').RouterStateSnapshot) {
        return of(this.configuration.openProjectDialog());
    }

}
