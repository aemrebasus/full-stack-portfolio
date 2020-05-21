import { FormControl } from '@angular/forms';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  constructor() { }

  validators() {
    const value = (controller: FormControl): any => controller.value;

    const validatorS = {
      mustBeNumber: (c: FormControl) => (isNaN(value(c))) ? { NaN: true } : null,
      nameLength: (c: FormControl) => (value(c).length > 2) ? { minLength: true } : null,
      longText: (c: FormControl) => (value(c).length > 10) ? null : { minLength: true },
      email: (c: FormControl) => (new RegExp(/\w+@w+\.\w{3}/).test(value(c))) ? null : { email: true },
    }

    return validatorS;
  }
}
