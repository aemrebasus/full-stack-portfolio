import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectManagementAppRoutingModule } from './pma-app.routing';

import { PmaAppComponent } from './pma-app.component';
import { TnavbarModule } from './shared/tnavbar/tnavbar.module';
import { TbannerModule } from './shared/tbanner/tbanner.module';
import { TmainListModule } from './shared/tmain-list/tmain-list.module';
import { TloadingModule } from './shared/tloading/tloading.module';
import { IssueModule } from '@pma-entity-modules/issue/module';
import { ProjectModule } from '@pma-entity-modules/project/module';
import { HttpClientModule } from '@angular/common/http';
import { AppStateModule } from './state/module';
import { IssueListComponent } from './entities/issue/issue-list/issue-list.component';

@NgModule({
  declarations: [
    PmaAppComponent,
    IssueListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AppStateModule,
    TnavbarModule,
    TbannerModule,
    TmainListModule,
    TloadingModule,
    IssueModule,
    ProjectModule,
    ProjectManagementAppRoutingModule
  ]
})
export class ProjectManagementAppModule { }
