import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog/dialog.component';
import { RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TmodalModule } from '@shared/tmodal/tmodal.module';



@NgModule({
  declarations: [DialogComponent],
  imports: [
    CommonModule,
    TmodalModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: DialogComponent }])
  ],
  exports: [
    DialogComponent
  ]
})
export class TdialogModule { }
