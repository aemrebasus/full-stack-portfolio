import { Component, OnInit } from '@angular/core';
import { IMiddleAreaData } from 'src/themes/theme/middle-area/middle-area.component';
import { ILeftMenuData, ILeftMenuSingleData } from 'src/themes/theme/left-menu/left-menu.component';
import { ThemeDataService } from '../services/theme/theme-data.service';
import { DataService } from '../services/data/data.service';
import { INavbar } from 'src/themes/theme/navbar/navbar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  middleArea: IMiddleAreaData;

  leftMenu: ILeftMenuData;

  navs: INavbar;


  constructor(private dataService: DataService, private themeDataService: ThemeDataService, private router: Router) { }

  ngOnInit(): void {
    this.leftMenu = this.dataService.projects();
    this.middleArea = this.dataService.project();


    this.navs = this.themeDataService.navbar();
  }


  menuClick(event) {
    this.middleArea = {
      headers: ['1', '2', '3'],
      items: [
        ['one', 'two', 'three']
      ]
    }
  }

  navClick(event) {
    console.log('Navbar Click: ', event);
    if (event === 'New Project') {
      this.router.navigate([{ outlets: { 'right-area': ['new-project'] } }]);
    }
  }

}
