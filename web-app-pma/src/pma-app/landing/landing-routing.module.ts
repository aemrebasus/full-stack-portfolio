import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { Outlets } from '@pma-services/navbar/navbar.service';


const routes: Routes = [
    { path: '', redirectTo: 'home' },
    {
        path: 'home',
        component: MainComponent,
        children: Outlets
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class LandingRouitingModule { }


