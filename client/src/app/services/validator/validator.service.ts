import { Injectable } from '@angular/core';
import validator from 'validator';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  validateSigninForm(email: string, password: string, agreement: boolean) {
    return { isEmail: validator.isEmail(email), isPassword: !validator.isEmpty(password), isAgreementAccepted: agreement };
  }

}
