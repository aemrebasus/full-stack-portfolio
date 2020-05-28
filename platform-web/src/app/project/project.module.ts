import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectViewComponent } from './project-view/project-view.component';
import { ProjectFormComponent } from './project-form/project-form.component';



@NgModule({
  declarations: [ProjectViewComponent, ProjectFormComponent],
  imports: [
    CommonModule
  ]
})
export class ProjectModule { }
