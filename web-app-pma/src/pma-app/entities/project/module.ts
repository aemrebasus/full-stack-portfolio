import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProjectComponent } from './component';
import { ProjectFormResolver, ProjectDialogResolver } from './resolvers';
import { ProjectConfiguration } from './configurations';

@NgModule({
  declarations: [
    ProjectComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(
      [
        {
          path: 'project',
          children: [
            {
              path: 'new project',
              loadChildren: () => import('@shared/tform/tform.module').then(m => m.TformModule),
              resolve: { resolved: ProjectFormResolver }
            },
            {
              path: 'open project',
              loadChildren: () => import('@shared/tdialog/tdialog.module').then(m => m.TdialogModule),
              resolve: { resolved: ProjectDialogResolver }
            }
          ]
        }
      ]
    )
  ],
  exports: [
    ProjectComponent
  ],
  providers: [
    ProjectConfiguration,
    ProjectFormResolver,
    ProjectDialogResolver
  ]
})
export class ProjectModule {

  static moduleName = 'project';


}




