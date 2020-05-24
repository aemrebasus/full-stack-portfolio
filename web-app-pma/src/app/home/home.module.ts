import { NgModule } from '@angular/core';
import { WelcomeComponent } from './welcome/welcome.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    WelcomeComponent,
    PageNotFoundComponent,
  ],
  imports: [
    RouterModule.forChild([
      { path: '', component: WelcomeComponent },
      { path: 'pma', loadChildren: () => import('../../pma-app/pma-app.module').then(m => m.ProjectManagementAppModule) }
    ])
  ],
  exports: [
    WelcomeComponent,
    PageNotFoundComponent
  ]
})
export class HomeModule { }
