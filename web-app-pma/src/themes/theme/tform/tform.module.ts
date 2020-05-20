import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TmodalModule } from '../tmodal/tmodal.module';



@NgModule({
  declarations: [
    ReactiveFormComponent
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
  ]
})
export class TformModule { }
