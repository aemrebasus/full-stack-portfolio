import { Component, OnInit } from '@angular/core';

import { Router, } from '@angular/router';
import { IMiddleAreaData } from '@ttable/middle-area/middle-area.component';
import { ILeftMenuData } from '@tmain-list/left-menu/left-menu.component';
import { NavBarData } from '@pma-services/navbar/navbar.service';
import { INavbar } from '@tnavbar/navbar/navbar.component';
import { DataService } from '@pma-services/data/data.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  middleArea: IMiddleAreaData;

  leftMenu: ILeftMenuData;

  navs: INavbar;


  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.leftMenu = this.dataService.projects();
    this.middleArea = this.dataService.project();


    this.navs = NavBarData;
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
