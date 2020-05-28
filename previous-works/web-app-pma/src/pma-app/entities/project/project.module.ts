import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProjectComponent } from './project.component';
import { ProjectResolver } from './project.resolver';



@NgModule({
  declarations: [
    ProjectComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'project',
        children: [




          ...['create-project', 'update-project'].map(path => (
            {
              path,
              loadChildren: () => import('@shared/tform/tform.module').then(m => m.TformModule),
              resolve: { resolved: ProjectResolver }
            }
          )),




          ...['open-project', 'delete-project'].map(path => (
            {
              path,
              loadChildren: () => import('@shared/tdialog/tdialog.module').then(m => m.TdialogModule),
              resolve: { resolved: ProjectResolver }
            }
          ))





        ]
      }
    ])
  ],
  exports: [
    ProjectComponent
  ],
  providers: [
    ProjectResolver
  ]
})
export class ProjectModule { }




