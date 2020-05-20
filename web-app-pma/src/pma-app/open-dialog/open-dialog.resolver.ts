import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { IFormData } from '@tform/reactive-form/reactive-form.interfaces';
import { ValidationErrors } from '@angular/forms';
import { IDialogMeta } from '@tdialog/dialog/dialog.component';

@Injectable({
    providedIn: 'root'
})
export class OpenDialogResolver implements Resolve<any> {

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        console.log('route', route, '\n', 'state', state, '\n', 'queryParams', route.queryParamMap.get('event'))

        const openProject: IDialogMeta = {
            title: 'Open Project',
            bgColor: 'primary',
            data: [

            ],
            textColor: 'white'
        }

        return of({ dialog: openProject })
    }

}


