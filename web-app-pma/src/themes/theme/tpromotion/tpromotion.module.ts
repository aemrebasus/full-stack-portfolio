import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromotionComponent } from './promotion/promotion.component';
import { LoadingComponent } from './loading/loading.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    PromotionComponent,
    LoadingComponent
  ]
})
export class TpromotionModule { }
