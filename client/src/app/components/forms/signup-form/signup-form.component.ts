import { Component } from '@angular/core';
import { ValidatorService } from '@services/form/validator.service';
import { BaseInput } from '@components/form-builder/input/input.meta';
import { FormBuilder } from '@components/form-builder/form-builder.meta';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent {

  route = '/api/v1/signup';

  constructor(private validationService: ValidatorService) { }

  form = new FormBuilder({ name: 'Sign Up', color: 'info', route: this.route, redirection: '/app' })
    .addFirstNameField()
    .addLastNameField()
    .addOrganizationNameField()
    .addEmailField()
    .addPasswordField()
    .addSecondPasswordField();



}
