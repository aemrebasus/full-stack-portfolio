import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ThemeModule } from '../themes/theme/theme.module';



@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    ThemeModule,
    RouterModule.forChild([
      { path: '', redirectTo: 'home' },
      {
        path: 'home', component: MainComponent,
        children: [
          { path: 'new-project', component: null, outlet: 'right-area' }
        ]
      },

    ])
  ]
})
export class ProjectManagementApp { }
