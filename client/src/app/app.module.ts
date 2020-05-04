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


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SignupFormComponent,
    ConfirmationComponent,
    InputComponent,
    FormCardComponent,
    SigninFormComponent,
    FormBuilderComponent
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
