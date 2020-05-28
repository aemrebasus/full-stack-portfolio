import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { TsearchbarModule } from '@shared/tsearchbar/tsearchbar.module';
import { SearchBarComponent } from '@shared/tsearchbar/search-bar/search-bar.component';




@NgModule({
  declarations: [LeftMenuComponent],
  imports: [
    CommonModule,
    TsearchbarModule
  ],
  exports: [
    LeftMenuComponent,
    SearchBarComponent
  ]
})
export class TmainListModule { }
