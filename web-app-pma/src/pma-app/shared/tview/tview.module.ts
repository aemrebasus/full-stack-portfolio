import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleComponent } from './single/single.component';
import { ListComponent } from './list/list.component';



@NgModule({
  declarations: [SingleComponent, ListComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SingleComponent
  ]
})
export class TviewModule { }
