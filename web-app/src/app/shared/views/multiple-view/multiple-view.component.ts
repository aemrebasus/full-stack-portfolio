import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IPageMeta } from '@sharedModule/interfaces/interfaces';

@Component({
  selector: 'app-multiple-view',
  templateUrl: './multiple-view.component.html',
  styleUrls: ['./multiple-view.component.scss']
})
export class MultipleViewComponent implements OnInit {

  @Input() meta: IPageMeta;

  @Output() events = new EventEmitter();

  thead: string[] = [];


  constructor() { }


  ngOnInit(): void {

    function serialize(object: object) {
      console.log(`Object to be serialized : ${object}`)
      const serialized = [];
      try {
        for (const o of Object.entries(object)) {
          serialized.push(o);
        }
      } catch (err) {
        console.log(err.message);
      }
      return serialized;
    }


    this.meta.data = this.meta.data.map(r => serialize(r));
    this.meta.data = this.meta.data.map(r => {
      const element = r.find(e => e[0] === 'meta')
      element.push(serialize(element[1]))
      element.shift();
      element.shift();
      return r;
    });




    this.meta.data[0].forEach(e => {
      if (typeof e[0] === 'object') {
        e[0].forEach(i => {
          this.thead.push(i[0]);
        });
      } else {
        this.thead.push(e[0]);
      }
    });


    setTimeout(() => {
      console.log(this.meta.data)
    }, 1000);


  }

  onViewClick() {
    this.events.emit({
      type: 'view'
    });
  }
  onEditClick() {
    this.events.emit({
      type: 'edit'
    });
  }


  onDeleteClick() {
    this.events.emit({
      type: 'delete'
    });
  }

  onInput(filterValue: string) {
    this.events.emit({
      type: 'filter',
      value: filterValue
    });
  }


}

