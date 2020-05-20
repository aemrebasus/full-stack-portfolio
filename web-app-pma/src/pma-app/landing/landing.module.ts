import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { LandingRouitingModule } from './landing-routing.module';
import { TnavbarModule } from '@tnavbar/tnavbar.module';
import { NavbarComponent } from '@tnavbar/navbar/navbar.component';


@NgModule({
  declarations: [
    MainComponent,
  ],
  imports: [
    CommonModule,
    TnavbarModule,
    LandingRouitingModule
  ],
  exports: [
    MainComponent,
    NavbarComponent
  ]
})
export class LandingModule { }
