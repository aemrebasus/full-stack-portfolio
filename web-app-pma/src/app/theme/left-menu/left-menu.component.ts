import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent {

  name = 'leftMenu';

  @Input() data: ILeftMenuData;
  @Output() clicked = new EventEmitter<any>();

  pillColors = ['success', 'danger', 'secondary', 'success'];

  click(item: ILeftMenuSingleData) {
    this.clicked.emit(item);
  }

}

export interface ILeftMenuSingleData {
  name?: string;
  pills?: [number?, number?, number?];
}

export type ILeftMenuData = ILeftMenuSingleData[];


