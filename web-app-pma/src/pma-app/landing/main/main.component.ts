import { Component, OnInit } from '@angular/core';
import { INavbar } from '@tnavbar/navbar/navbar.component';
import { NavbarMetaService } from '@pma/services/navbar/navbar.meta.service';
import { ILeftMenuData } from '@tmain-list/left-menu/left-menu.component';
import { HttpClientService } from '@pma-services/http-service/http.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  navs: INavbar;
  banners = ['Ahmet', 'Emrebas', 'Ahmet'];

  issues: ILeftMenuData = [
    { values: ['Menu item', 'anogher one'], pills: [1, 2, 3] },

  ];


  constructor(
    private navbarMetaService: NavbarMetaService,
    private httpService: HttpClientService
  ) {

  }
  ngOnInit(): void {
    this.httpService.issues().subscribe(data => {
      this.issues = data.map(e => ({ values: [e.title, e.description], pills: [e.meta.status, ...e.meta.tags] }))
    });
  }

}
