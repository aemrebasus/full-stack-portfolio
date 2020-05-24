import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IConfirmMeta, ConfirmationMetas, IConfirmationResult } from '@shared/tconfirmation/confirm/confirm.interfaces';

@Component({
  selector: 'app-modal-wrapper',
  templateUrl: './modal-wrapper.component.html',
  styleUrls: ['./modal-wrapper.component.scss']
})
export class ModalWrapperComponent implements OnInit {

  @Input() bgColor = 'Secondary';
  @Input() textColor = 'white';
  @Input() title = 'No Title (bgColor? textColor? title?)';
  @Output() confirmEvent = new EventEmitter();


  confirmationMetas: IConfirmMeta[] = ConfirmationMetas.all();


  ngOnInit(): void {
  }

  closeOutlet() {

  }

  confirm(event: IConfirmationResult) {
    this.confirmEvent.emit(event);
  }


}
