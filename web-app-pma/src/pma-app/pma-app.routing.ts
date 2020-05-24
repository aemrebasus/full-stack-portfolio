import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PmaAppComponent } from './pma-app.component';


@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: PmaAppComponent },
        ])
    ]
})
export class ProjectManagementAppRoutingModule { }

