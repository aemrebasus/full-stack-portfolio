import { Component, Output, EventEmitter } from '@angular/core';
import { IModal } from '../confirmation.component';

@Component({
  selector: 'app-update-confirmation',
  templateUrl: './update-confirmation.component.html',
  styleUrls: ['./update-confirmation.component.scss']
})
export class UpdateConfirmationComponent {


  public modal: IModal = {
    id: 'updateModal',
    title: 'Update',
    message: 'Would you like to update?',
    color: 'warning'
  };



  @Output() confirmed = new EventEmitter<boolean>();

  capture(event) {
    this.confirmed.emit(event);
  }

}
