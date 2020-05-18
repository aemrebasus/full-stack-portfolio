import { Component, OnInit } from '@angular/core';
import { IMiddleAreaData } from 'src/app/theme/middle-area/middle-area.component';
import { ILeftMenuData, ILeftMenuSingleData } from 'src/app/theme/left-menu/left-menu.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  middleArea: IMiddleAreaData = {
    headers: ['asdf', 'asdfa', 'asdfasdf'],
    items: [
      ['asdsdgasdgf', 'sdgfsdfgsdfg', 'werwerwer']
    ]
  };

  leftMenu: ILeftMenuSingleData[] = [
    { name: 'First Project', pills: [1, 5, 6] },
    { name: 'First Project', pills: [1, 5, 6] },
    { name: 'First Project', pills: [1, 5, 6] },
  ];

  constructor() { }

  ngOnInit(): void {
  }


  menuClick(event) {
    this.middleArea = {
      headers: ['1', '2', '3'],
      items: [
        ['one', 'two', 'three']
      ]
    }
  }

}
