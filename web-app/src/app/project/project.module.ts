import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SingleProjectComponent } from './single-project/single-project.component';
import { MultipleProjectsComponent } from './projects-table/multiple-projects.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { SharedModule } from '@sharedModule/shared.module';
import { MultipleViewResolverService } from '@sharedModule/multiple-view/services/multiple-view-resolver.service';
import { FormResolverService } from '@sharedModule/reactive-form/services/router-resolver/form-resolver.service';
import { ProjectHomeComponent } from './project-home/project-home.component';
import { ProjectsMenuComponent } from './projects-menu/projects-menu.component';

const routes = [
  { path: 'project', redirectTo: 'projects', pathMatch: 'full' },
  {
    path: 'projects', component: ProjectHomeComponent,
    resolve: { data: MultipleViewResolverService },
    children: [
      {
        path: 'view/:id',
        component: SingleProjectComponent,

      },
      {
        path: 'edit',
        component: EditProjectComponent,
        resolve: { data: FormResolverService },
      },
      {
        path: 'new',
        component: CreateProjectComponent,

      }
    ]
  }
];


@NgModule({
  declarations: [
    SingleProjectComponent,
    MultipleProjectsComponent,
    EditProjectComponent,
    CreateProjectComponent,
    ProjectHomeComponent,
    ProjectsMenuComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class ProjectModule { }
