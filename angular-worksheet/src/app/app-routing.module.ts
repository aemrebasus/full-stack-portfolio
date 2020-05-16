import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewChildComp } from './view-child/view-child.component';


const routes: Routes = [
  { path: 'viewChild', component: ViewChildComp }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
