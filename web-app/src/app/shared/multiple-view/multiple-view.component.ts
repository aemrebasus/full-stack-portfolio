import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IPageMeta } from '@sharedModule/interfaces/interfaces';
import { IOperationEvent } from '@sharedModule/reactive-form/reactive-form.interfaces';


@Component({
  selector: 'app-multiple-view',
  templateUrl: './multiple-view.component.html',
  styleUrls: ['./multiple-view.component.scss']
})
export class MultipleViewComponent implements OnInit {

  @Input() meta: IPageMeta = {};

  filteredData: any = [];

  @Output() events = new EventEmitter<IOperationEvent>();


  thead: string[] = [];



  ngOnInit(): void {

    this.meta.data = this.meta.data.map(r => serialize(r));
    this.meta.data = this.meta.data.map(r => {
      const element = r.find(e => e[0] === 'meta');
      element.push(serialize(element[1]));
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

    this.filteredData = this.meta.data;
  }

  onViewClick(id: string) {
    this.events.emit({
      type: 'view',
      value: id
    });
  }


  onEditClick(id: string) {
    this.events.emit({
      type: 'edit',
      value: id
    });
  }

  onInput(filterValue: string) {
    this.filteredData = this.meta.data.filter(e => {
      if (e.toString().toLowerCase().includes(filterValue.toLowerCase())) {
        return true;
      } else {
        return false;
      }
    });
  }

}


function serialize(object: object) {

  const serialized = [];

  for (const o of Object.entries(object)) {
    serialized.push(o);
  }

  return serialized;
}

