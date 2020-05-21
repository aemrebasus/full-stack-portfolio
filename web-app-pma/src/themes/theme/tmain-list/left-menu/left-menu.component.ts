import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent {

  name = 'leftMenu';
  @Input() title = 'Menu Title';


  @Input() data: ILeftMenuData = [
    { values: ['Menu item', 'anogher one'], pills: [1, 2, 3] },
    { values: ['Menu item', 'anogher one'], pills: [1, 2, 3] },
    { values: ['Menu item', 'anogher one'], pills: [1, 2, 3] },
    { values: ['Menu item', 'anogher one'], pills: [1, 2, 3] },
    { values: ['Menu item', 'anogher one'], pills: [1, 2, 3] },
    { values: ['Menu item', 'anogher one'], pills: [1, 2, 3] },
    { values: ['Menu item', 'anogher one'], pills: [1, 2, 3] },
    { values: ['Menu item', 'anogher one'], pills: [1, 2, 3] },
    { values: ['Menu item', 'anogher one'], pills: [1, 2, 3] },
  ];

  filteredData: ILeftMenuData = this.data;

  @Output() menuClick = new EventEmitter<any>();

  pillColors = ['success', 'danger', 'secondary', 'success'];

  click(item: ILeftMenuSingleData) {
    this.menuClick.emit(item);
  }




  filter(event: ILeftMenuData) {
    this.filteredData = event;
  }

}

export interface ILeftMenuSingleData {
  values?: string[];
  pills?: number[];
}

export type ILeftMenuData = ILeftMenuSingleData[];


