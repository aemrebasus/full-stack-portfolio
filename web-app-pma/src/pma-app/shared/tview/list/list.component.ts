import { Component, OnInit, Input } from '@angular/core';
import { IViewConfiguration } from '@pma/core/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() data: IViewConfiguration;


  constructor() { }

  ngOnInit(): void {
  }

  click(event) {
    this.data.dispatch({
      type: this.data.configuration.meta.submit,
      paylaod: event
    })
  }

}
