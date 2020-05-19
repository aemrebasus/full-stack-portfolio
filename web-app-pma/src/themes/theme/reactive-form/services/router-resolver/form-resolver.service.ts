import { Injectable } from '@angular/core';

import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { of, Observable } from 'rxjs';
import { IFormData } from '../../reactive-form.interfaces';


@Injectable({
  providedIn: 'root'
})
export class FormResolverService implements Resolve<IFormData>{

  constructor() { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): IFormData | Observable<IFormData> | Promise<IFormData> {
    const sentData: IFormData = {
      meta: {
        formTitle: 'Create Project',
        formName: 'Create Something',
        formType: 'CREATE',
        submitLabel: 'Save',
        inputs: [
          {
            type: 'text', name: 'id', label: 'ID', helperText: 'Type your ID',
            validators: [{ name: 'required', value: true }]
          },
          {
            type: 'text', name: 'name', label: 'Name', helperText: 'Type your Name',
            validators: [{ name: 'minLength', value: 10 }]
          },
          {
            type: 'text', name: 'lastName', label: 'Name', helperText: 'Type your lastname',
            validators: [{ name: 'minLength', value: 10 }]
          },
        ],
      },
      data: {
      }
    };
    return of(sentData);
  }

}





