import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { ConfirmationComponent } from './components/form-builder/confirmation/confirmation.component';
import { LandingComponent } from '@components/landing/landing.component';
import { UsersListComponent } from './components/data-view/users-list/users-list.component';
import { ProjectsComponent } from './components/data-view/projects/projects.component';
import { IssuesComponent } from './components/data-view/issues/issues.component';
import { AppBoardComponent } from './components/landing/app-board/app-board.component';
import { InputComponent } from '@components/form-builder/input/input.component';
import { FormCardComponent } from '@components/form-builder/card/form-card.component';
import { FormBuilderComponent } from '@components/form-builder/form-builder.component';
import { SignupFormComponent } from './components/forms/signup-form/signup-form.component';
import { SigninFormComponent } from './components/forms/signin-form/signin-form.component';
import { IssueFormComponent } from './components/forms/issue-form/issue-form.component';
import { UserFormComponent } from './components/forms/user-form/user-form.component';
import { ProjectFormComponent } from './components/forms/project-form/project-form.component';
import { SignoutConfirmComponent } from './components/forms/signout-confirm/signout-confirm.component';


@NgModule({
  declarations: [
    AppComponent,
    ConfirmationComponent,
    InputComponent,
    FormCardComponent,
    FormBuilderComponent,

    LandingComponent,
    UsersListComponent,
    ProjectsComponent,
    IssuesComponent,
    AppBoardComponent,
    SignupFormComponent,
    SigninFormComponent,
    IssueFormComponent,
    UserFormComponent,
    ProjectFormComponent,
    SignoutConfirmComponent,
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
