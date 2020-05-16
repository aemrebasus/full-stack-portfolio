import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmComponent } from './confirm/confirm.component';
import { MultipleViewComponent } from './multiple-view/multiple-view.component';
import { SingleViewComponent } from './single-view/single-view.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertComponent } from './alert/alert.component';

@NgModule({
  declarations: [
    ConfirmComponent,
    MultipleViewComponent,
    SingleViewComponent,
    ReactiveFormComponent,
    AlertComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  exports: [
    // Modules
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    
    // Components
    ConfirmComponent,
    MultipleViewComponent,
    SingleViewComponent,
    AlertComponent
  ]
})
export class SharedModule { }
