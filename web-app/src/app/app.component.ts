import { Component } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router';
import { slideAnimation } from '@sharedModule/animation/animation';

@Component({
  selector: 'app-root',
  template: `
  <div  style="position:fixed;  width:100vw; height:100vh;background-color:rgba(50,50,100,0.5); z-index:100; 
   display:flex;
   flex-direction:row;
   justify-content:center;
   align-items:center;
  "
  *ngIf="loading"
  >
  <div class="spinner-border text-danger" role="status"  style="width:100px;   height:100px;">
  <span class="sr-only">Loading...</span>
  </div>
  </div>
  <router-outlet></router-outlet>
  `,
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
