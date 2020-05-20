import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RoutingService } from '../../zzservices/routing/routting.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  currentOutlet: string = null;

  @Input() navs: INavbar;

  @Output() navClick = new EventEmitter<string>();

  constructor(private routingService: RoutingService) { }

  click(event: INavbarItem) {
    this.openOutlet(event);
  }

  openOutlet(event: INavbarItem) {
    this.routingService.openOutlet(event.outlet, event.path);
  }

}

/**
 * @path ?: string;
 * @subs ?: INavbarItem[];
 * @outlet ?: string;
 * @component ?: any;
 * @loadChildren ?: any;
 */
export interface INavbarItem {

  path?: string;
  subs?: INavbarItem[];
  outlet?: string;
  component?: any;
  loadChildren?: any;
}

/**
 * @INavbarItem []
 */
export type INavbar = INavbarItem[];



