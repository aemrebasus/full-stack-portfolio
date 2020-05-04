import { Injectable } from '@angular/core';
import _validator from 'validator';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {
  public validator = _validator;


  // Validation Methods
  isNameValid(name: string = ''): string {
    try {
      return (this.validator.isEmpty(name) && 'Name is required.')
        || (!this.validator.isLength(name, { min: 2 }) && 'Name must be at least 2 character long.')
        || (!this.validator.isAlpha(name) && 'Name must contain only alphabetic characters.');

    } catch (err) {
      return 'Name is required.';
    }

  }

  isEmailValid(email: string = ''): string {
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
}

