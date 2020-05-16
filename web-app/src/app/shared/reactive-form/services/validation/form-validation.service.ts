import { Injectable } from '@angular/core';
import { FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormValidationService {


  constructor() { }

  resolveValidationRules() {

  }




}


/**
 * Some validators
 */
export const customValidators = {
  forbiddenNames: (control: FormControl): ValidationErrors | null => {
    const forbiddenNames = ['Ahmet'];
    if (forbiddenNames.includes(control.value)) {
      return {
        forbiddenName: true
      };
    } else {
      return null;
    }
  }
}

