import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormDialogResolverService } from '@pma/services/form-resolver/form-dialog.resolver.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        loadChildren: () => import('@tform/tform.module').then(m => m.TformModule),
        resolve: { resolved: FormDialogResolverService }
      }
    ])
  ],
  providers: []
})
export class OpenFormModule { }
