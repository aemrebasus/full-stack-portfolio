import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './home/page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  {
    path: 'pma',
    children: [
      { path: '', loadChildren: () => import('@pma/pma-app.module').then(m => m.ProjectManagementAppModule) },
    ]
  },
  {
    path: '**', component: PageNotFoundComponent
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
