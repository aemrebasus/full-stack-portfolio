import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html'
})
export class ConfirmationComponent {


  @Input() modal: IModal = {
    id: 'ID',
    title: 'Title',
    message: 'message',
    color: 'primary'
  };

  @Output() confirmed = new EventEmitter<boolean>();


  confirm() {
    this.confirmed.emit(true);
  }

  cancel() {
    this.confirmed.emit(false);
  }

}

export interface IModal {
  id: string;
  title: string;
  message: string;
  color: 'danger' | 'primary' | 'warning' | 'info';
}
