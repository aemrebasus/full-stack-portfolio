import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupFormComponent } from '@components/form/signup-form/signup-form.component';
import { SigninFormComponent } from '@components/form/signin-form/signin-form.component';
import { ConfirmationComponent } from '@components/confirmation/confirmation.component';


const routes: Routes = [
  { path: 'signup', component: SignupFormComponent },
  { path: 'signin', component: SigninFormComponent },
  { path: 'con', component: ConfirmationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
