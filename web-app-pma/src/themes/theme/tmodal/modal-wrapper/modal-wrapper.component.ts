import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RoutingService } from '../../zzservices/routing/routting.service';
import { IConfirmMeta, ConfirmationMetas, IConfirmationResult } from '@tconfirmation/confirm/confirm.interfaces';
import { FormGroup } from '@angular/forms';

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

  constructor(private routingService: RoutingService) { }

  ngOnInit(): void {
  }

  closeOutlet() {
    this.routingService.closeOutlet();
  }

  confirm(event: IConfirmationResult) {
    this.confirmEvent.emit(event);
  }


}
