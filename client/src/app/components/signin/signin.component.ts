import { Component, OnInit } from '@angular/core';
import { ValidatorService } from '@services/validator/validator.service';
import { SigninService } from '@services/auth/signin.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(private validatorService: ValidatorService, private signinService: SigninService, private router: Router) { }


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
    //TODO
    return this.isEmail && this.isPassword && this.agreement;
  }

  signin() {
    this.signinService.signin({ email: this.email, password: this.password })
      .subscribe(
        res => {
          this.resetForm();
          this.router.navigate(['profile'], { replaceUrl: true });
          /**
           * Alert must come later than navigation becuase it stops navigation.
           */
          alert(res.msg);
        },
        err => {
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
