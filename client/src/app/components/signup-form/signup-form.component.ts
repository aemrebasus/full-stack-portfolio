import { Component, OnInit } from '@angular/core';
import { ValidatorService, SingUpFormType } from '@services/validator/validator.service';


@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent {


  constructor(private validator: ValidatorService) {  }

  // When submit button clicks then this turns to true.
  public isSubmitted = false;

  public form: SingUpFormType = {
    firstName: { value: '', validation: '' },
    lastName: { value: '', validation: '' },
    email: { value: '', validation: '' },
    companyName: { value: '', validation: '' },
    password: { value: '', validation: '' },
    passwordAgain: { value: '', validation: '' }
  };


  submitForm() {
    this.isSubmitted = true;
    this.validator.isSignUpFormValid(this.form);

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

