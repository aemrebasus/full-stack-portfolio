import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TmodalModule } from '../tmodal/tmodal.module';
import { InputControlComponent } from './input-control/input-control.component';
import { WaitForPipe } from './wait/wait-for.pipe';
import { TconfirmationModule } from '@tconfirmation/tconfirmation.module';



@NgModule({
  declarations: [
    ReactiveFormComponent,
    InputControlComponent,
    WaitForPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    TconfirmationModule,
    TmodalModule,
    RouterModule.forChild([
      { path: '', component: ReactiveFormComponent }
    ])
  ]
})
export class TformModule { }
