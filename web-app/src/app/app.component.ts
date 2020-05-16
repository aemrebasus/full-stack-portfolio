import { Component } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router';
import { slideAnimation } from '@sharedModule/animation/animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideAnimation]
})
export class AppComponent {

  loading = true;

  constructor(private router: Router) {

    router.events.subscribe((routerEvent: Event) => {

      if (routerEvent instanceof NavigationStart) {
        this.loading = true;
      }

      if (
        routerEvent instanceof NavigationEnd ||
        routerEvent instanceof NavigationCancel ||
        routerEvent instanceof NavigationEnd ||
        routerEvent instanceof NavigationEnd
      ) {
        setTimeout(() => {
          this.loading = false;
        }, 500);
      }


    });
  }


}
