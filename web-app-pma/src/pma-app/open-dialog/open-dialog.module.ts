import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OpenDialogResolverService } from '@pma/services/dialog-resolver/dialog.resolver.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        loadChildren: () => import('@tdialog/tdialog.module').then(m => m.TdialogModule),
        resolve: { resolved: OpenDialogResolverService }
      }
    ])
  ]
})
export class OpenDialogModule { }
