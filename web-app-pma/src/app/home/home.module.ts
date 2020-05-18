import { NgModule } from '@angular/core';
import { WelcomeComponent } from './welcome/welcome.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';




@NgModule({
  declarations: [
    WelcomeComponent,
    PageNotFoundComponent,
  ],
  exports: [
    WelcomeComponent,
    PageNotFoundComponent
  ]
})
export class HomeModule { }
