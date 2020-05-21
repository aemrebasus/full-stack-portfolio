import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { HttpClientService } from '../http-service/http.service';

@Injectable({
    providedIn: 'root'
})
export class OpenDialogResolverService implements Resolve<any> {

    constructor(private httpService: HttpClientService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let data;
        this.httpService.projects().subscribe((result) => {
            data = result;
        });


        return of({
            title: 'Open Project',
            bgColor: 'dark',
            textColor: 'white',
            data
        });
    }

}


