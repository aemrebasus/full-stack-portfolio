import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  @Input() navs: INavbar;

  @Output() navClick = new EventEmitter<string>();

  constructor(private router: Router) {

  }

  click(event: INavbarItem) {

    const outlets = {};

    try { outlets[event.outlet] = null; } catch (err) {
      // Ignore this error
    }

    this.router.navigate([{ outlets }]).catch(err => { });

    try { outlets[event.outlet] = [event.path]; } catch (err) {
      // Ignore this error
    }

    this.router.navigate([this.router.url, { outlets }]).catch(err => { });



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



