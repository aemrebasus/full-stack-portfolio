import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() data: any;


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
