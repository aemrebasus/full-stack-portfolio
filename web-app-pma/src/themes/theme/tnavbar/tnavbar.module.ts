import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { ToRouterLinkPipe } from './navbar/to-router-link.pipe';



@NgModule({
  declarations: [
    NavbarComponent,
    ToRouterLinkPipe
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class TnavbarModule { }
