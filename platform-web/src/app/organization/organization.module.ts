import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizationFormComponent } from './organization-form/organization-form.component';
import { OrganizationViewComponent } from './organization-view/organization-view.component';



@NgModule({
  declarations: [OrganizationFormComponent, OrganizationViewComponent],
  imports: [
    CommonModule
  ]
})
export class OrganizationModule { }
