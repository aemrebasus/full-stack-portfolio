import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { NavigationComponent } from '@components/navigation/navigation.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { LandingComponent } from '@components/landing/landing.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { IssuesComponent } from './components/issues/issues.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AppBoardComponent } from './components/app-board/app-board.component';
import { InputComponent } from '@components/form-builder/input/input.component';
import { FormCardComponent } from '@components/form-builder/card/form-card.component';
import { FormBuilderComponent } from '@components/form-builder/form-builder.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ConfirmationComponent,
    InputComponent,
    FormCardComponent,
    FormBuilderComponent,

    LandingComponent,
    UsersListComponent,
    ProjectsComponent,
    IssuesComponent,
    DashboardComponent,
    AppBoardComponent,
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
