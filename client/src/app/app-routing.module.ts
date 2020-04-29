import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServerComponent } from '@components/server/server.component';
import { DeveloperComponent } from '@components/developer/developer.component';
import { SigninComponent } from '@components/signin/signin.component';
import { MainComponent } from '@components/main/main.component';
import { ProfileComponent } from '@components/profile/profile.component';
import { IssueViewComponent } from '@components/issue-view/issue-view.component';

const routes: Routes = [
  { path: 'information', component: ServerComponent },
  { path: 'developer', component: DeveloperComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signout', component: SigninComponent },
  { path: 'app', component: MainComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'issues', component: IssueViewComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
