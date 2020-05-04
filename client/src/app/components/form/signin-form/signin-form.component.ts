import { Component } from '@angular/core';
import { ValidatorService } from '@services/form/validator.service';
import { FormBuilder } from '../form-builder/form-builder.meta';
import { FormInput } from '../input/input.meta';

@Component({
  selector: 'app-signin-form',
  template: `
      <app-form-card [color]="form.color" [title]="form.title">
          <app-form-builder [form]="form"></app-form-builder>
      </app-form-card>
  `
})
export class SigninFormComponent {

  constructor(private validator: ValidatorService) { }

  public form: FormBuilder = new FormBuilder('Sign In', 'success')
    .addFields(
      new FormInput('email', 'Email', 'email', (value: string) => this.validator.isEmailValid(value)),
      new FormInput('password', 'Password', 'password', (value: string) => this.validator.isPasswordValid(value))
    );


}
