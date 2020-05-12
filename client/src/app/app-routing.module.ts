import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from '@components/data-view/projects/projects.component';
import { IssuesComponent } from '@components/data-view/issues/issues.component';
import { AppBoardComponent } from '@components/landing/app-board/app-board.component';
import { UsersListComponent } from '@components/data-view/users-list/users-list.component';
import { LandingComponent } from '@components/landing/landing.component';
import { SigninFormComponent } from '@components/forms/signin-form/signin-form.component';
import { SignupFormComponent } from '@components/forms/signup-form/signup-form.component';
import { UserFormComponent } from '@components/forms/user-form/user-form.component';
import { IssueFormComponent } from '@components/forms/issue-form/issue-form.component';
import { ProjectFormComponent } from '@components/forms/project-form/project-form.component';



const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'signin', component: SigninFormComponent },
  { path: 'signup', component: SignupFormComponent },
  {
    path: 'app', component: AppBoardComponent,
    children: [
      { path: 'userform', component: UserFormComponent },
      { path: 'issueform', component: IssueFormComponent },
      { path: 'projectform', component: ProjectFormComponent },
      { path: 'projects', component: ProjectsComponent },
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
