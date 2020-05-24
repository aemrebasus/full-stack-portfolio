import { Resolve } from '@angular/router';
import { of } from 'rxjs';

import { Injectable } from '@angular/core';



@Injectable({
    providedIn: 'root'
})
export class ProjectFormResolver implements Resolve<any> {

    resolve(route: import('@angular/router').ActivatedRouteSnapshot, state: import('@angular/router').RouterStateSnapshot) {
        return of(null);
    }

}


@Injectable({
    providedIn: 'root'
})
export class ProjectDialogResolver implements Resolve<any> {

    resolve(route: import('@angular/router').ActivatedRouteSnapshot, state: import('@angular/router').RouterStateSnapshot) {
        return of();
    }

}
