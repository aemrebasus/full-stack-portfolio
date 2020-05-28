import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProjectComponent } from './projects-view/project.component';
import { ProjectEditComponent } from './project-edit/project-edit.component';
import { ProjectCreateComponent } from './project-create/project-create.component';
import { ProjectHomeComponent } from './project-home/project-home.component';
import { ProjectResolverService } from './services/resolvers/project-resolver.service';
import { ProjectsResolverService } from './services/resolvers/projects-resolver.service';

const routes = [
//     {
//     path: 'projects', children: [
//         {
//             path: '',
//             component: ProjectHomeComponent,
//             resolve: { projects: ProjectsResolverService },
//             children: [
//                 {
//                     path: '', component: ProjectComponent
//                 },
//                 {
//                     path: ':_id',
//                     component: ProjectComponent,
//                     resolve: { project: ProjectResolverService }
//                 },
//                 {
//                     path: ':_id/edit',
//                     component: ProjectEditComponent,
//                     resolve: { project: ProjectResolverService }
//                 },
//                 {
//                     path: 'create/project',
//                     component: ProjectCreateComponent
//                 }
//             ]
//         },
//     ],
// }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProjectRoutingModule {

}