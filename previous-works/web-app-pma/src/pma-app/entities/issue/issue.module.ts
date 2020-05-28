import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IssueViewComponent } from './single-issue/single-issue.component';
import { TviewModule } from '@shared/tview/tview.module';
import { routes } from './issue.services';



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
