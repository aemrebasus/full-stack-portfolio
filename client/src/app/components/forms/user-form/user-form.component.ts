import { Component } from '@angular/core';
import { ValidatorService } from '@services/form/validator.service';
import { FormBuilder } from '@components/form-builder/form-builder.meta';
import { BaseInput } from '@components/form-builder/input/input.meta';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {

  route = '/api/v1/signup';

  constructor(private validationService: ValidatorService) { }

  form = new FormBuilder({ name: 'User Form', color: 'info', route: this.route })
    .addFirstNameField()
    .addLastNameField()
    .addEmailField()
    .addPasswordField()
    .addSelectRoleField();


}
