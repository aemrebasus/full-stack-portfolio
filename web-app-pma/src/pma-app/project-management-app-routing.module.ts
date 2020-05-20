import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule) },
        ])
    ]
})
export class ProjectManagementAppRoutingModule { }

