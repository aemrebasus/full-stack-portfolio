import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IEntityAll } from '@pma/core/IEntityAll';
import { IViewEventArg } from '@pma/core/core';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss']
})
export class SingleComponent implements OnInit {

  @Input() data: IEntityAll;
  /**
   * Name of the data type like User, Issue, Project, or Organizatin etc.
   */
  @Input() name: string;

  @Output() event = new EventEmitter<IViewEventArg>();


  constructor() { }

  ngOnInit(): void {

  }

  click(event: ISingleViewEvent) {
    this.event.emit({
      type: event,
      paylaod: this.data
    });
  }
}
export type ISingleViewEvent = 'delete' | 'close' | 'assign' | 'edit';
