import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { ServerComponent } from '@components/server/server.component';
import { NavigationComponent } from '@components/navigation/navigation.component';
import { DeveloperComponent } from '@components/developer/developer.component';
import { AlertComponent } from '@components/alert/alert.component';
import { SigninComponent } from '@components/signin/signin.component';
import { MainComponent } from '@components/main/main.component';
import { ProfileComponent } from '@components/profile/profile.component';
import { IssueViewComponent } from '@components/issue-view/issue-view.component';
import { AdminConsoleComponent } from '@components/admin-console/admin-console.component';
import { IssueFormComponent } from './components/issue-form/issue-form.component';
import { UserViewComponent } from './components/user-view/user-view.component';
import { IssueUpdateComponent } from './components/issue-update/issue-update.component';
import { IssueDeleteComponent } from './components/issue-delete/issue-delete.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    NavigationComponent,
    DeveloperComponent,
    AlertComponent,
    SigninComponent,
    MainComponent,
    ProfileComponent,
    IssueViewComponent,
    AdminConsoleComponent,
    IssueFormComponent,
    UserViewComponent,
    IssueUpdateComponent,
    IssueDeleteComponent,
    SignupFormComponent
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
