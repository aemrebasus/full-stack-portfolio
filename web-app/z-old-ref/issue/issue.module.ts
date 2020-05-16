import { NgModule } from '@angular/core';
import { IssueCreateComponent } from './issue-create/issue-create.component';
import { IssueEditComponent } from './issue-edit/issue-edit.component';
import { IssuesViewComponent } from './issues-view/issues-view.component';
import { IssueRoutingModule } from './issue-routing.module';
import { SharedModule } from '@sharedModule/shared.module';



@NgModule({
  declarations: [
    IssueCreateComponent,
    IssueEditComponent,
    IssuesViewComponent
  ],
  imports: [
    SharedModule,
    IssueRoutingModule
  ],
  exports: [
    IssueCreateComponent,
    IssueEditComponent,
    IssueCreateComponent,
    IssueRoutingModule
  ]
})
export class IssueModule { }
