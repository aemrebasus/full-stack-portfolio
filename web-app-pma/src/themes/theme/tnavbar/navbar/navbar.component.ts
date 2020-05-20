import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  currentOutlet: string = null;

  @Input() navs: INavbar;

  @Output() navClick = new EventEmitter<string>();

  constructor(private router: Router, private route: ActivatedRoute) {

  }

  click(event: INavbarItem) {
    this.openOutlet(event);
  }

  openOutlet(event: INavbarItem) {

    const outlets = {};
    outlets[event.outlet] = event.path;
    this.router.navigate([this.router.url, { outlets }]).catch(err => { });

  }
  closeOutlet(event) {
    this.router.navigate([this.router.url, { 'right-area': null }]).catch(err => { });

  }

}


export interface INavbarItem {
  path?: string;
  subs?: INavbarItem[];
  outlet?: string;
  component?: any;
  loadChildren?: any;
}

export type INavbar = INavbarItem[];



