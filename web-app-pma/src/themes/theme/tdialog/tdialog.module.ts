import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog/dialog.component';
import { RouterModule } from '@angular/router';
import { TmodalModule } from '@tmodal/tmodal.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



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
