import { Injectable } from '@angular/core';
import _validator from 'validator';
import { IValidationResult } from '@components/form-builder/input/meta/handlers';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {
  public validator = _validator;


  // Validation Methods
  isNameValid(name: string = ''): IValidationResult {
    let status = false;
    const messages = [];

    try {

      if (this.validator.isEmpty(name)) {
        messages.push(`Field is required`);
      }

      if (!this.validator.isLength(name, { min: 2 })) {
        messages.push(`Field must be at least 2 character long`);
      }

    } catch (err) {
      messages.push(`Some error happened!`);

      return {
        status: false,
        messages
      };
    }

    status = !(messages.length > 0);

    return {
      status,
      messages
    };
  }

  isNickNameValid(name: string = ''): IValidationResult {
    let status = false;
    const messages: string[] = [];
    try {
      if (this.validator.isEmpty(name)) {
        messages.push('Field is required.');
      }

      if (!this.validator.isLength(name, { min: 2 })) {

        messages.push('Field must be at least 2 character long.');
      }

      if (!name.split(' ').map(e => this.validator.isAlpha(e.replace(/ /g, '')))
        .reduce((p, c) => p && c)) {
        messages.push('Field must contain only alphabetic characters.');
      }

    } catch (err) {
      messages.push('Some Error happended');
      return {
        status,
        messages
      };
    }


    status = !(messages.length > 0);


    return {
      status,
      messages
    };

  }

  isEmailValid(email: string = ''): IValidationResult {
    let status = false;
    const messages: string[] = [];

    try {

      if (this.validator.isEmpty(email)) {
        messages.push('Email is required.');
      }

      if (!this.validator.isLength(email, { min: 9 })) {
        messages.push('Email must be at least 9 character long.');
      }

      if (!this.validator.isEmail(email)) {
        messages.push('Email is not valid email.');
      }

    } catch (err) {
      status = false;
      messages.push('Email is Required');
      return {
        status,
        messages
      };
    }

    status = !(messages.length > 0);
    return {
      status,
      messages
    };
  }

  isPasswordValid(password: string): IValidationResult {
    let status = true;
    const messages: string[] = [];

    try {
      if (this.validator.isEmpty(password)) {
        messages.push('Password is required');
      }

      if (!this.validator.isLength(password, { min: 8 })) {
        messages.push('Password must be at least 8 character long.');
      }

    } catch (err) {
      status = false;
      messages.push('Password is required!');
      return {
        status,
        messages
      };


    }

    status = !(messages.length > 0);

    return {
      status,
      messages
    };
  }

}

