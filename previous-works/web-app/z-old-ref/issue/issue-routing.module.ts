import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IssuesViewComponent } from './issues-view/issues-view.component';


const routes = [
    // {
    //     path: '', component: IssuesViewComponent,
    //     path: ':id',
    // }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class IssueRoutingModule {

}