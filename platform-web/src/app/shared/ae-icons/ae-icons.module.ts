import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressBookSolidComponent } from './address-book-solid';
import { AddressBookComponent } from './address-book';



@NgModule({
  declarations: [
    AddressBookSolidComponent,
    AddressBookComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AddressBookSolidComponent,
    AddressBookComponent
  ]
})
export class AeIconsModule { }
