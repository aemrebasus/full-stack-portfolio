import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IModal } from '../confirmation.component';


@Component({
  selector: 'app-signout-confirmation',
  templateUrl: './signout-confirmation.component.html',
  styleUrls: ['./signout-confirmation.component.scss']
})
export class SignoutConfirmationComponent {


  public modal: IModal = {
    id: 'signoutModal',
    title: 'Sign Out',
    message: 'Would you like to sign out?',
    color: 'warning'
  };

  @Output() confirmed = new EventEmitter<boolean>();

  capture(event) {
    this.confirmed.emit(event);
  }


}
