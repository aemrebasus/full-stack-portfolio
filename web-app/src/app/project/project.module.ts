import { NgModule } from '@angular/core';

/* Shared module (nothing yet) */
import { SharedModule } from '../shared/shared.module';

/* Components */
import { ProjectComponent } from './projects-view/project.component';
import { ProjectCreateComponent } from './project-create/project-create.component';
import { ProjectEditComponent } from './project-edit/project-edit.component';

/* Routing Module */
import { ProjectRoutingModule } from './project-routing.module';
import { ProjectHomeComponent } from './project-home/project-home.component';



@NgModule({
  declarations: [
    ProjectComponent,
    ProjectCreateComponent,
    ProjectEditComponent,
    ProjectHomeComponent
  ],
  imports: [
    SharedModule,
    ProjectRoutingModule
  ]
})
export class ProjectModule { }
