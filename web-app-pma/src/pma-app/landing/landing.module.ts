import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { LandingRouitingModule } from './landing-routing.module';
import { TnavbarModule } from '@tnavbar/tnavbar.module';
import { NavbarComponent } from '@tnavbar/navbar/navbar.component';
import { TbannerModule } from '@tbanner/tbanner.module';
import { TmainListModule } from '@tmain-list/tmain-list.module';
import { TloadingModule } from 'src/themes/theme/tloading/tloading.module';



@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    TnavbarModule,
    TbannerModule,
    TmainListModule,
    TloadingModule,
    LandingRouitingModule
  ],
  exports: [
    MainComponent,
    NavbarComponent
  ]
})
export class LandingModule { }
