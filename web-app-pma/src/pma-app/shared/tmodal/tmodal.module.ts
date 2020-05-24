import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalWrapperComponent } from './modal-wrapper/modal-wrapper.component';
import { TconfirmationModule } from '@shared/tconfirmation/tconfirmation.module';



@NgModule({
  declarations: [ModalWrapperComponent],
  imports: [
    CommonModule,
    TconfirmationModule
  ],
  exports: [
    ModalWrapperComponent
  ]
})
export class TmodalModule { }
