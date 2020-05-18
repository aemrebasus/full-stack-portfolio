import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ThemeModule } from '../themes/theme/theme.module';


@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    ThemeModule,
    RouterModule.forChild([
      { path: '', component: MainComponent, pathMatch: 'full' }
    ])
  ]
})
export class ProjectModule { }
