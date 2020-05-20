import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TmodalModule } from '../tmodal/tmodal.module';
import { InputControlComponent } from './input-control/input-control.component';
import { WaitForPipe } from './wait/wait-for.pipe';



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
    TmodalModule,
    RouterModule.forChild([
      { path: '', component: ReactiveFormComponent }
    ])
  ],
  exports: [
    ReactiveFormComponent,
    InputControlComponent
  ]
})
export class TformModule { }
