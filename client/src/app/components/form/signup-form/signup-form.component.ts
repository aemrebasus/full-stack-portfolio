import { Component } from '@angular/core';
import { ValidatorService } from '@services/form/validator.service';
import { FormBuilder } from '../form-builder/form-builder.meta';
import { FormInput } from '../input/input.meta';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html'
})
export class SignupFormComponent {

  constructor(private validator: ValidatorService) { }

  public form = new FormBuilder('Sign Up', 'danger')
    .addFields(
      new FormInput('firstName', 'First Name', 'text', (value: string) => this.validator.isNameValid(value)),
      new FormInput('lastName', 'Last Name', 'text', (value: string) => this.validator.isNameValid(value)),
      new FormInput('email', 'Email', 'email', (value: string) => this.validator.isEmailValid(value)),

      new FormInput('companyName', 'Company Name', 'text', (value: string) => this.validator.isNameValid(value)),
      new FormInput('password', 'Password', 'password', (value: string) => this.validator.isPasswordValid(value)),
      new FormInput('passwordAgain', 'Password', 'password', (value: string) => this.validator
        .isPasswordAgainValid(value, this.form.getValueById('password'))
      )
    );
}

