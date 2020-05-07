import { Component } from '@angular/core';
import { ValidatorService } from '@services/form/validator.service';
import { FormBuilder } from '../form-builder/form-builder.meta';
import { FormInput } from '../input/input.meta';
import { HttpService } from '@services/http/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin-form',
  template: `
      <app-form-card [color]="form.color" [title]="form.title">
          <app-form-builder [form]="form" (submitted)="submit()"></app-form-builder>
      </app-form-card>
  `
})
export class SigninFormComponent {

  constructor(private validator: ValidatorService, private httpService: HttpService, private router: Router) { }

  public form: FormBuilder = new FormBuilder('Sign In', 'success')
    .addFields(
      new FormInput('email', 'Email', 'email', (value: string) => this.validator.isEmailValid(value)),
      new FormInput('password', 'Password', 'password', (value: string) => this.validator.isPasswordValid(value))
    );


  public getFieldValue(id: string) {
    return this.form.getFieldById(id).value;
  }

  public submit() {

    const org: { email: string, password: string } = {
      email: this.getFieldValue('email'),
      password: this.getFieldValue('password'),
    }

    this.httpService.post('/api/v1/signin', org, { responseType: 'text' })
      .subscribe(
        response => {
          if (response.toString() === 'Congrats! Successfully signed in.') {
            this.router.navigateByUrl('/app/dashboard');
          } else { 
            this.form.reset();
          }

        },
        err => alert(err)
      );


  }

}
