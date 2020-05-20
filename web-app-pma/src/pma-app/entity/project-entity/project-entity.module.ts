import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProjectResolverService } from './project-resolver.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        loadChildren: () => import('@tform/tform.module').then(m => m.TformModule),
        resolve: { resolved: ProjectResolverService }
      }
    ])
  ]
})
export class ProjectEntityModule { }
