import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { IConfirmationResult, IConfirmMeta } from './confirm.interfaces';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {

  @Input() meta: IConfirmMeta = {};

  @Output() response = new EventEmitter<IConfirmationResult>();

  bgColor;
  textColor;

  // Add the event name to the first array in the colorMap.
  colorMap = [
    [['save', 'open'], ['success', 'white']],
    [['edit', 'back', 'close', 'reset', 'update'], ['warning', 'dark']],
    [['delete'], ['danger', 'white']]
  ];

  ngOnInit(): void {
    [this.bgColor, this.textColor] = this.colorMap.find(e => e[0].includes(this.meta.type))[1];
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


