import { Component, OnInit } from '@angular/core';
import { ValidatorService } from '@services/validator/validator.service';
import { SigninService } from '@services/auth/signin.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(private validatorService: ValidatorService, private signinService: SigninService) { }


  /**
   * Bindings
   */
  email: string;
  password: string;
  agreement: boolean;

  /**
   * Validations
   */
  isSubmitted = false;
  isEmail = false;
  isPassword = false;


  /**
   * Error Message shown under the form.
   */
  errorMessage;


  ngOnInit(): void {
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.validateCredentials()) {
      this.signin();
    }
  }

  validateCredentials() {
    const result = this.validatorService.validateSigninForm(this.email, this.password, this.agreement);
    this.isEmail = result.isEmail;
    this.isPassword = result.isPassword;
    this.agreement = result.isAgreementAccepted;

    return this.isEmail && this.isPassword && this.agreement;
  }

  signin() {
    this.signinService.signin({ email: this.email, password: this.password })
      .subscribe(res => {
        alert(res.msg);
        this.resetForm();
      }, err => {
        this.errorMessage = err;
        this.resetForm();
      });
  }

  resetForm() {
    this.email = '';
    this.password = '';
    this.agreement = false;

    this.isSubmitted = false;
    this.isEmail = false;
    this.isPassword = false;
    this.agreement = false;
    setTimeout(() => {
      this.errorMessage = undefined;
    }, 2000);
  }
}
