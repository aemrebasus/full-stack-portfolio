import { Component } from '@angular/core';
import { FormBuilder } from '@components/form-builder/form-builder.meta';
import { BaseInput } from '@components/form-builder/input/input.meta';
import { ValidatorService } from '@services/form/validator.service';

@Component({
  selector: 'app-signin-form',
  templateUrl: './signin-form.component.html',
  styleUrls: ['./signin-form.component.scss']
})
export class SigninFormComponent {

  constructor(private validationService: ValidatorService) {

  }
  form = new FormBuilder({ name: 'Sign In', color: 'success' })
    .addField(
      new BaseInput({
        type: 'text',
        label: 'Email',
        helperText: 'Type your email',
        validates: [
          (value: string) => this.validationService.isEmailValid(value)
        ]
      })
    )
    .addField(
      new BaseInput({
        type: 'password',
        label: 'Password',
        helperText: 'Type your password',
        validates: [
          (value: string) => this.validationService.isPasswordValid(value)
        ]
      })
    )

}
