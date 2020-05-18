import { Component, OnInit, Input } from '@angular/core';



@Component({
  selector: 'app-middle-area',
  templateUrl: './middle-area.component.html',
  styleUrls: ['./middle-area.component.scss']
})
export class MiddleAreaComponent {
  @Input() name = 'middleArea';
  @Input() data: IMiddleAreaData;
}

type IHeaders = string[];
type IItems = string[][];

export interface IMiddleAreaData {
  headers: IHeaders;
  items: IItems;
}
