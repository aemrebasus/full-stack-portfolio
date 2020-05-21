import { Component, OnInit } from '@angular/core';
import { INavbar } from '@tnavbar/navbar/navbar.component';
import { NavbarMetaService } from '@pma/services/navbar/navbar.meta.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  navs: INavbar;
  banners = ['Ahmet', 'Emrebas', 'Ahmet'];
  constructor(private navbarMetaService: NavbarMetaService) {

  }
  ngOnInit(): void {
    this.navs = this.navbarMetaService.settings();
    
  }

}
