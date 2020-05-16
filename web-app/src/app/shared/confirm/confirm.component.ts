import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { IConfirmationResult, IConfirmMeta } from './confirm.interfaces';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {

  @Input() meta: IConfirmMeta;

  @Output() response = new EventEmitter<IConfirmationResult>();


  ngOnInit(): void {
  }

  confirm() {
    this.response.emit({
      type: this.meta.type,
      status: true,
      message: `${this.meta.type} operation confirmed!`
    });
  }

  cancel() {
    this.response.emit({
      type: this.meta.type,
      status: false,
      message: `${this.meta.type} operation canceled!`
    });
  }
}


