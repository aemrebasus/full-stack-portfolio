import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TmodalModule } from '../tmodal/tmodal.module';
import { WaitForPipe } from './wait/wait-for.pipe';
import { TconfirmationModule } from '@shared/tconfirmation/tconfirmation.module';




@NgModule({
  declarations: [
    ReactiveFormComponent,
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
