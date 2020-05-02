import { Injectable } from '@angular/core';
import _validator from 'validator';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {
  public validator = _validator;


  // Validation Methods 
  isNameValid(name: string = ''): VType {
    try {
      return (this.validator.isEmpty(name) && 'Name is required.')
        || (!this.validator.isLength(name, { min: 2 }) && 'Name must be at least 2 character long.')
        || (!this.validator.isAlpha(name) && 'Name must contain only alphabetic characters.');

    } catch (err) {
      return 'Name is required.';
    }

  }

  isEmailValid(email: string = ''): VType {

    try {
      return (this.validator.isEmpty(email) && 'Email is required.')
        || (!this.validator.isLength(email, { min: 9 }) && 'Email must be at least 9 character long.')
        || (!this.validator.isEmail(email) && 'Email is not valid email.');

    } catch (err) {
      return 'Email is required.';
    }
  }

  isPasswordValid(password: string = '') {
    try {
      return (this.validator.isEmpty(password) && 'Password is required')
        || (!this.validator.isLength(password, { min: 8 }) && 'Password must be at least 8 character long.');
    } catch (err) {
      return 'Password is required';
    }
  }

  isPasswordAgainValid(password: string = '', passwordAgain: string = '') {
    try {

      return (this.validator.isEmpty(password) && 'Password is required')
        || (!(password === passwordAgain) && 'Password does NOT match.');
    } catch (err) {
      return 'Password is required';
    }
  }



  isSignUpFormValid(form: SingUpFormType) {
    form.firstName.validation = this.isNameValid(form.firstName.value);
    form.lastName.validation = this.isNameValid(form.lastName.value);
    form.email.validation = this.isEmailValid(form.email.value);
    form.companyName.validation = this.isNameValid(form.companyName.value);
    form.password.validation = this.isPasswordValid(form.password.value);
    form.passwordAgain.validation = this.isPasswordAgainValid(form.passwordAgain.value);
  }



}

export type VType = string;

export type SingUpFormType = {
  firstName: { value: '', validation: boolean | string },
  lastName: { value: '', validation: boolean | string },
  email: { value: '', validation: boolean | string },
  companyName: { value: '', validation: boolean | string },
  password: { value: '', validation: boolean | string },
  passwordAgain: { value: '', validation: boolean | string }
}