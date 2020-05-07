import { Component, Input } from '@angular/core';
import { ValidatorService } from '@services/form/validator.service';
import { FormBuilder } from '../form-builder/form-builder.meta';
import { FormInput } from '../input/input.meta';
import { HttpService } from '@services/http/http.service';
import { IOrganization } from '@app/shared/IOrganization';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html'
})
export class SignupFormComponent {

  constructor(private validator: ValidatorService, private httpService: HttpService) { }
  @Input() formName = 'Sign Up';
  @Input() color = 'danger';


  public form = new FormBuilder(this.formName, this.color)
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

  public getFieldValue(id: string) {
    return this.form.getFieldById(id).value;
  }

  public submit() {
    const org: IOrganization = {
      firstName: this.getFieldValue('firstName'),
      lastName: this.getFieldValue('lastName'),
      email: this.getFieldValue('email'),
      password: this.getFieldValue('password'),
      name: this.getFieldValue('companyName'),
    }

    this.httpService.post('/api/v1/signup', org, { responseType: 'text' })
      .subscribe(
        response => { alert(response) },
        err => { alert(err) }
      );


  }

}

