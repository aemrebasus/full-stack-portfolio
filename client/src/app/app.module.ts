import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { NavigationComponent } from '@components/navigation/navigation.component';
import { SignupFormComponent } from './components/form/signup-form/signup-form.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { InputComponent } from './components/form/input/input.component';
import { FormCardComponent } from './components/form/form-card/form-card.component';
import { SigninFormComponent } from './components/form/signin-form/signin-form.component';
import { FormBuilderComponent } from './components/form/form-builder/form-builder.component';
import { LandingComponent } from '@components/landing/landing.component';
import { ConsoleComponent } from './components/console/console.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { IssuesComponent } from './components/issues/issues.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NewUserComponent } from './components/form/new-user/new-user.component';
import { NewIssueComponent } from './components/form/new-issue/new-issue.component';
import { NewProjectComponent } from './components/form/new-project/new-project.component';
import { InputListComponent } from './components/form/input-list/input-list.component';
import { NewSprintComponent } from './components/form/new-sprint/new-sprint.component';
import { ConsoleButtonComponent } from './components/form/console-button/console-button.component';
import { ListButtonComponent } from './components/form/list-button/list-button.component';
import { AppBoardComponent } from './components/app-board/app-board.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SignupFormComponent,
    ConfirmationComponent,
    InputComponent,
    FormCardComponent,
    SigninFormComponent,
    FormBuilderComponent,
    LandingComponent,
    ConsoleComponent,
    UsersListComponent,
    ProjectsComponent,
    IssuesComponent,
    DashboardComponent,
    NewUserComponent,
    NewIssueComponent,
    NewProjectComponent,
    InputListComponent,
    NewSprintComponent,
    ConsoleButtonComponent,
    ListButtonComponent,
    AppBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
