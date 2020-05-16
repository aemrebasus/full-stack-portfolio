import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MultipleViewComponent } from '@sharedModule/multiple-view/multiple-view.component';
import { ReactiveFormComponent } from '@sharedModule/reactive-form/reactive-form.component';
import { MultipleViewResolverService } from '@sharedModule/multiple-view/services/multiple-view-resolver.service';
import { FormResolverService } from '@sharedModule/reactive-form/services/router-resolver/form-resolver.service';
import { SingleViewComponent } from '@sharedModule/single-view/single-view.component';

const routes: Routes = [
  {
    path: 'view',
    resolve: { data: MultipleViewResolverService },
    children: [
      { path: '', component: MultipleViewComponent },
      { path: ':id', component: SingleViewComponent }
    ]
  },

  {
    path: 'edit',
    resolve: { data: FormResolverService },
    children: [
      { path: ':type', component: ReactiveFormComponent }
    ]
  },
  { path: 'setting/:type', component: ReactiveFormComponent },

  // { path: '', redirectTo: 'welcome', pathMatch: 'full', },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true }) // , enableTracing: true
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
