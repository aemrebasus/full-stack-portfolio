import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfirmationComponent } from '@components/confirmation/confirmation.component';
import { LandingComponent } from '@components/landing/landing.component';
import { ProjectsComponent } from '@components/projects/projects.component';
import { IssuesComponent } from '@components/issues/issues.component';
import { DashboardComponent } from '@components/dashboard/dashboard.component';
import { AppBoardComponent } from '@components/app-board/app-board.component';
import { UsersListComponent } from '@components/users-list/users-list.component';
import { FormBuilderComponent } from '@components/form/form-builder/form-builder.component';



const routes: Routes = [
  { path: '', component: FormBuilderComponent },
  { path: 'con', component: ConfirmationComponent },
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
