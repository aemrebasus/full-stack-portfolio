import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProjectResolverService } from './project-resolver.service';
import { ReactiveFormComponent } from '@tform/reactive-form/reactive-form.component';
import { TformModule } from '@tform/tform.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TformModule,
    RouterModule.forChild([
      {
        path: '',
        component: ReactiveFormComponent,
        // loadChildren: () => import('@tform/tform.module').then(m => m.TformModule),
        resolve: { resolved: ProjectResolverService }
      }
    ])
  ]
})
export class ProjectEntityModule { }
