import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './router.config';
import { IssueViewComponent } from './component';
import { TviewModule } from '@shared/tview/tview.module';



@NgModule({
  declarations: [
    IssueViewComponent
  ],
  imports: [
    CommonModule,
    TviewModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    IssueViewComponent
  ]
})
export class IssueModule { }
