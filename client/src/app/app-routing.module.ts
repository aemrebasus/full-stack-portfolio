import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServerComponent } from '@components/server/server.component';
import { DeveloperComponent } from '@components/developer/developer.component';
import { SigninComponent } from '@components/signin/signin.component';
import { MainComponent } from '@components/main/main.component';
import { ProfileComponent } from '@components/profile/profile.component';
import { IssueViewComponent } from '@components/issue-view/issue-view.component';
import { AdminConsoleComponent } from '@components/admin-console/admin-console.component';
import { IssueFormComponent } from '@components/issue-form/issue-form.component';
import { UserViewComponent } from '@components/user-view/user-view.component';
import { IssueUpdateComponent } from '@components/issue-update/issue-update.component';
import { IssueDeleteComponent } from '@components/issue-delete/issue-delete.component';
import { SignupFormComponent } from '@components/signup-form/signup-form.component';

const routes: Routes = [
  { path: 'information', component: ServerComponent },
  { path: 'developer', component: DeveloperComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signout', component: SigninComponent },
  { path: 'app', component: MainComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'issues', component: IssueViewComponent },
  { path: 'signup', component: SignupFormComponent },
  {
    path: 'admin',
    component: AdminConsoleComponent,
    children: [
      { path: 'issueform', component: IssueFormComponent },
      { path: 'issueUpdate', component: IssueUpdateComponent },
      { path: 'issueDelete', component: IssueDeleteComponent },
      { path: 'issues', component: IssueViewComponent },
      { path: 'users', component: UserViewComponent },
    ]

  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
