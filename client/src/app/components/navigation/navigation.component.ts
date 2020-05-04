import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styles: ['.active{ border-bottom:thin solid white;}']
})
export class NavigationComponent  {

  constructor( private router: Router) { }


}
