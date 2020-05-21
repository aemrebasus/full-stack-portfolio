import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {

  loading = false;
  constructor(private router: Router) {

    router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.loading = true;
      }

      if (event instanceof NavigationEnd ||
        event instanceof NavigationError ||
        event instanceof NavigationCancel) {

        this.loading = false;

      }
    })


  }


}
