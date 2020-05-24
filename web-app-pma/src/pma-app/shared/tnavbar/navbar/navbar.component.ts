import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { INavbarComponents } from './navbar.interface';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  currentOutlet: string = null;

  @Input() navs: INavbarComponents;

  @Output() navClick = new EventEmitter<string>();

  constructor(private router: Router) { }

}

