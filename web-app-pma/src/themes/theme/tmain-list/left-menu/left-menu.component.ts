import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent implements OnInit {

  name = 'leftMenu';

  @Input() title = 'Menu Title';


  @Input() data: ILeftMenuData;

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
  }

  click(item: ILeftMenuSingleData) {
    this.menuClick.emit(item);
  }


  ngOnInit(): void {
    this.filteredData = this.data;
  }


  filter(event: ILeftMenuData) {
    this.filteredData = event;
  }

}

export interface ILeftMenuSingleData {
  values?: string[];
  pills?: (number | string)[];
}

export type ILeftMenuData = ILeftMenuSingleData[];


