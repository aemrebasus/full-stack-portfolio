import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder } from '../form-builder/form-builder.meta';
import { FormInput } from '../input/input.meta';
import { ValidatorService } from '@services/form/validator.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent {

  constructor(private validator: ValidatorService) { }

  @Input() formName = 'Create User';
  @Input() color = 'primary';


  public form = new FormBuilder(this.formName, this.color)
    .addFields(
      new FormInput('firstName', 'First Name', 'text', (value: string) => this.validator.isNameValid(value)),
      new FormInput('lastName', 'Last Name', 'text', (value: string) => this.validator.isNameValid(value)),
      new FormInput('email', 'Email', 'email', (value: string) => this.validator.isEmailValid(value)),
      new FormInput('password', 'Password', 'password', (value: string) => this.validator.isPasswordValid(value)),
      new FormInput('passwordAgain', 'Password', 'password', (value: string) => this.validator
        .isPasswordAgainValid(value, this.form.getValueById('password'))
      )
    );

}
