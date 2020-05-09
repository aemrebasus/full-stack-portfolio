import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { NavigationComponent } from '@components/navigation/navigation.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { InputComponent } from './components/form/form-builder/form-input/input.component';
import { FormCardComponent } from './components/form/form-builder/form-card/form-card.component';
import { FormBuilderComponent } from './components/form/form-builder/form-builder.component';
import { LandingComponent } from '@components/landing/landing.component';
import { ConsoleComponent } from './components/console/console.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { IssuesComponent } from './components/issues/issues.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InputListComponent } from './components/form/form-builder/from-input-llist/input-list.component';
import { ConsoleButtonComponent } from './components/form/console-button/console-button.component';
import { ListButtonComponent } from './components/form/form-builder/form-list-button/list-button.component';
import { AppBoardComponent } from './components/app-board/app-board.component';
import { SelectComponent } from './components/form/form-builder/form-select/select.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ConfirmationComponent,
    InputComponent,
    FormCardComponent,
    FormBuilderComponent,
    LandingComponent,
    ConsoleComponent,
    UsersListComponent,
    ProjectsComponent,
    IssuesComponent,
    DashboardComponent,
    InputListComponent,
    ConsoleButtonComponent,
    ListButtonComponent,
    AppBoardComponent,
    SelectComponent
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
