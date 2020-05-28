import { NgModule, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IssueViewComponent } from './issue-view/issue-view.component';
import { IssueFormComponent } from './issue-form/issue-form.component';
import { RouterModule, Resolve } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ResolverService implements Resolve<any> {
  resolve(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot) {
    console.log(state)
  }

}



@NgModule({
  declarations: [IssueViewComponent, IssueFormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: IssueFormComponent },
      { path: 'issues', resolve: { resolved: ResolverService }, component: IssueViewComponent }
    ])
  ],
  exports: [IssueViewComponent, IssueFormComponent],
})
export class IssueModule { }

