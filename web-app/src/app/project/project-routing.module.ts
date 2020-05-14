import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProjectComponent } from './projects/projects-view/project.component';
import { ProjectEditComponent } from './projects/project-edit/project-edit.component';
import { ProjectCreateComponent } from './projects/project-create/project-create.component';
import { ProjectsComponent } from './projects/projects.component';

const routes = [{
    path: 'projects', component: ProjectsComponent, children: [
        { path: '', component: ProjectComponent },
        { path: ':id', component: ProjectComponent },
        { path: ':id/edit', component: ProjectEditComponent },
        { path: 'create/project', component: ProjectCreateComponent }
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProjectRoutingModule {

}