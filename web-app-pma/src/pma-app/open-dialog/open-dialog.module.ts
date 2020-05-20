import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OpenDialogResolver } from './open-dialog.resolver';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        loadChildren: () => import('@tdialog/tdialog.module').then(m => m.TdialogModule),
        resolve: { resolved: OpenDialogResolver }
      }
    ])
  ]
})
export class OpenDialogModule { }
