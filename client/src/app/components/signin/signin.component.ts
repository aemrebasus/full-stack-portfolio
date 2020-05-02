import { Component, OnInit } from '@angular/core';
import { ValidatorService, SignInFormType } from '@services/validator/validator.service';
import { SigninService } from '@services/auth/signin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(private validator: ValidatorService, private signinService: SigninService, private router: Router) { }


  public isSubmitted = false;

  public form: SignInFormType = {
    email: { value: '', validation: '' },
    password: { value: '', validation: '' },
    agreement: { value: '', validation: '' }
  };

  ngOnInit(): void {  }


  submitForm() {
    this.isSubmitted = true;
    this.validator.isSignInFormValid(this.form);

  }

  reset() {
    // Submitted
    this.isSubmitted = false;

    for (let i of Object.entries(this.form)) {
      i[1].value = '';
      i[1].validation = '';
    }
  }

}
