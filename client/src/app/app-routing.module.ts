import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfirmationComponent } from '@components/form-builder/confirmation/confirmation.component';
import { ProjectsComponent } from '@components/data-view/projects/projects.component';
import { IssuesComponent } from '@components/data-view/issues/issues.component';
import { DashboardComponent } from '@components/landing/dashboard/dashboard.component';
import { AppBoardComponent } from '@components/landing/app-board/app-board.component';
import { UsersListComponent } from '@components/data-view/users-list/users-list.component';
import { LandingComponent } from '@components/landing/landing.component';
import { SigninFormComponent } from '@components/forms/signin-form/signin-form.component';
import { SignupFormComponent } from '@components/forms/signup-form/signup-form.component';
import { UserFormComponent } from '@components/forms/user-form/user-form.component';



const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'con', component: ConfirmationComponent },
  { path: 'signin', component: SigninFormComponent },
  { path: 'signup', component: SignupFormComponent },
  { path: 'userform', component: UserFormComponent },
  {
    path: 'app', component: AppBoardComponent,
    children: [
      { path: 'projects', component: ProjectsComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'issues', component: IssuesComponent },
      { path: 'users', component: UsersListComponent }
    ]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
