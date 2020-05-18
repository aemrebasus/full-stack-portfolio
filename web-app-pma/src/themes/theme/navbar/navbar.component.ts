import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() navs: INavbar;

  @Output() navClick = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  click(event) {
    this.navClick.emit(event);
  }

}


export interface INavbarItem {
  name: string;
  subs: string[];
}

export type INavbar = INavbarItem[];



