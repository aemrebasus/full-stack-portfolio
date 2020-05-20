import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { IFormData } from '@tform/reactive-form/reactive-form.interfaces';
import { ValidationErrors } from '@angular/forms';

@Injectable({
    providedIn: 'root'
})
export class ProjectResolverService implements Resolve<any> {


    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const sentData: IFormData = {
            meta: {
                formTitle: 'Create Project',
                formName: 'project',
                informationAlert: { message: 'SOme information laert' },
                formType: 'danger',
                submitLabel: 'Save Project',
                inputs: [
                    {
                        type: 'text',
                        name: 'id',
                        label: 'ID',
                        helperText: 'Type your ID',
                        placeholder: 'ID',
                        validators: [
                            (c) => {

                                if (c.value.length > 5) {
                                    return null;
                                } else {
                                    return {
                                        minLength: true
                                    };
                                }
                            }

                        ]
                    },
                    {
                        type: 'text',
                        name: 'name',
                        label: 'Name',
                        helperText: 'Type your Name',
                        placeholder: 'OOO MAN',
                        validators: []
                    },
                    {
                        type: 'text',
                        name: 'lastName',
                        label: 'Name',
                        helperText: 'Type your lastname',
                        placeholder: 'OOO MAN',
                        validators: []
                    },
                ],
            },
            data: {
            }
        };
        return of(sentData);
    }

}