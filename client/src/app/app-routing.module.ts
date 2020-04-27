import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServerComponent } from '@components/server/server.component';
import { DeveloperComponent } from '@components/developer/developer.component';

const routes: Routes = [
  { path: 'information', component: ServerComponent },
  { path: 'developer', component: DeveloperComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
