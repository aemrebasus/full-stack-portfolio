import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { NavbarMetaService } from '@pma/services/navbar/navbar.meta.service';


const routes: Routes = [
    { path: '', redirectTo: 'home' },
    {
        path: 'home',
        component: MainComponent,
        children: NavbarMetaService.staticOutlets()
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


