import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Shared module (nothing yet) */
import { SharedModule } from '../shared/shared.module';

/* Form Module for forms (NgForm) */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


/* Components */
import { ProjectsComponent } from './projects/projects.component';
import { ProjectComponent } from './projects/projects-view/project.component';
import { ProjectCreateComponent } from './projects/project-create/project-create.component';
import { ProjectEditComponent } from './projects/project-edit/project-edit.component';

/* Routing Module */
import { ProjectRoutingModule } from './project-routing.module';

@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectComponent,
    ProjectCreateComponent,
    ProjectEditComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    ProjectRoutingModule
  ]
})
export class ProjectModule { }
