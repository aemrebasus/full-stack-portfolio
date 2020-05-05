import { Component,  Input, Output, EventEmitter } from '@angular/core';
import {  Modal } from './confirmation.meta';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html'
})
export class ConfirmationComponent {


  @Input() modal = new Modal();

  @Output() confirmed = new EventEmitter<boolean>();


  confirm() {
    this.confirmed.emit(true);
  }

  cancel() {
    this.confirmed.emit(false);
  }

}
