import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';


@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent implements OnInit {

  // @Input() config: any;

  // @Input() data: any;


  @Input() data: ILeftMenuData;
  @Input() title: string;

  filteredData: ILeftMenuData;

  @Output() menuClick = new EventEmitter<any>();


  statusColors = {
    todo: 'warning',
    inprogress: 'info',
    done: 'success',
    complete: 'success',
    enhancement: 'info',
    feature: 'primary',
    task: 'secondary',
    bug: 'danger',
  };



  ngOnInit(): void {
    // this.data = this.config.toInteractiveListView();
    this.filteredData = this.data;
  }



  // Emit the id of the clicked element.
  click(item: ILeftMenuSingleData) {
    this.menuClick.emit(item.id);
  }

  filter(event: ILeftMenuData) {
    this.filteredData = event;
  }

}

export interface ILeftMenuSingleData {
  id?: string | number;
  values?: string[];
  pills?: (number | string)[];
}

export type ILeftMenuData = ILeftMenuSingleData[];


