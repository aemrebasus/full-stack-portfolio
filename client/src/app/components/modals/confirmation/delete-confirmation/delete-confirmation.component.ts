import { Component, Output, EventEmitter } from '@angular/core';
import { IModal } from '../confirmation.component';

@Component({
  selector: 'app-delete-confirmation',
  templateUrl: './delete-confirmation.component.html',
  styleUrls: ['./delete-confirmation.component.scss']
})
export class DeleteConfirmationComponent {

  public modal: IModal = {
    id: 'deleteModal',
    title: 'Delete',
    message: 'Would you like to delete?',
    color: 'danger'
  };



  @Output() confirmed = new EventEmitter<boolean>();

  capture(event) {
    this.confirmed.emit(event);
  }

}
