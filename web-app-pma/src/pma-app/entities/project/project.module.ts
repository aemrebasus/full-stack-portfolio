import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProjectComponent } from './project.component';
import { ProjectService, projectRoutes } from './project.service';


// ############################################ MODULE ###########################################################

@NgModule({
  declarations: [
    ProjectComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(projectRoutes)
  ],
  exports: [
    ProjectComponent
  ],
  providers: [
    ProjectService
  ]
})
export class ProjectModule { }




