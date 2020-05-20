import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableViewComponent } from './table-view/table-view.component';
import { MiddleAreaComponent } from './middle-area/middle-area.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    TableViewComponent,
    MiddleAreaComponent
  ]
})
export class TtableModule { }
