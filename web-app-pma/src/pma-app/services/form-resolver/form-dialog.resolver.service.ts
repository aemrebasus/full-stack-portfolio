import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { ComponentMetaService } from '@pma/services/component/component-meta.service';
import { IFormData } from '@tform/reactive-form/reactive-form.interfaces';
import { HttpClientService } from '../http-service/http.service';
import { LoggerService } from '../logger/logger.service';


@Injectable({
    providedIn: 'root'
})
export class FormDialogResolverService implements Resolve<any> {

    constructor(
        private componentService: ComponentMetaService,
        private httpClient: HttpClientService,
        private logger: LoggerService
    ) { }

    /**
     * Provide meta data for forms
     *
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IFormData> {
        const path = route.queryParamMap.get('path').toLowerCase();

        if (path === 'new project') {
            return of(this.componentService.formCreateProject());

        } else if (path === 'new issue') {
            return of(this.componentService.formCreateIssue());
        } else {
            const msg = `Could not find any route matching with ${path}`;
            this.logger.error(msg);
        }
    }

}



