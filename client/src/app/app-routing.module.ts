import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupFormComponent } from '@components/form/signup-form/signup-form.component';
import { SigninFormComponent } from '@components/form/signin-form/signin-form.component';
import { ConfirmationComponent } from '@components/confirmation/confirmation.component';
import { LandingComponent } from '@components/landing/landing.component';
import { ProjectsComponent } from '@components/projects/projects.component';
import { IssuesComponent } from '@components/issues/issues.component';
import { DashboardComponent } from '@components/dashboard/dashboard.component';
import { NewUserComponent } from '@components/form/new-user/new-user.component';
import { NewIssueComponent } from '@components/form/new-issue/new-issue.component';
import { NewProjectComponent } from '@components/form/new-project/new-project.component';
import { NewSprintComponent } from '@components/form/new-sprint/new-sprint.component';


const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'signup', component: SignupFormComponent },
  { path: 'signin', component: SigninFormComponent },
  { path: 'con', component: ConfirmationComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'issues', component: IssuesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'newuser', component: NewUserComponent },
  { path: 'newissue', component: NewIssueComponent },
  { path: 'newproject', component: NewProjectComponent },
  { path: 'newsprint', component: NewSprintComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
