import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Shared module (nothing yet) */
import { SharedModule } from '../shared/shared.module';

/* Form Module for forms (NgForm) */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


/* Components */
import { ProjectComponent } from './projects-view/project.component';
import { ProjectCreateComponent } from './project-create/project-create.component';
import { ProjectEditComponent } from './project-edit/project-edit.component';

/* Routing Module */
import { ProjectRoutingModule } from './project-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MultipleViewComponent } from '@sharedModule/views/multiple-view/multiple-view.component';

@NgModule({
  declarations: [
    ProjectComponent,
    ProjectCreateComponent,
    ProjectEditComponent,
    MultipleViewComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ProjectRoutingModule
  ]
})
export class ProjectModule { }
