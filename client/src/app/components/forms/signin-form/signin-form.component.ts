import { Component } from '@angular/core';
import { FormBuilder } from '@components/form-builder/form-builder.meta';

@Component({
  selector: 'app-signin-form',
  templateUrl: './signin-form.component.html',
  styleUrls: ['./signin-form.component.scss']
})
export class SigninFormComponent {

  route = '/api/v1/auth/signin';

  form = new FormBuilder({ name: 'Sign In', color: 'success', route: this.route, redirection: '/app' })
    .addEmailField()
    .addPasswordField();

}
