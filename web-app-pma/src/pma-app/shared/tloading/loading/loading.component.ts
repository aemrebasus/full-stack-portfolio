import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {

  loading = false;
  currentLocation = '...';
  activity = '...';
  outlet = '...';
  performance;
  start = Date.now();
  end = Date.now();

  @ViewChild('state') stateComponent: ElementRef;


  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      const queryMap = this.router.routerState.snapshot.root.queryParamMap;
      const getColor = () => {
        const c = () => Math.floor(Math.random() * 255);
        return `rgb(${c()},${c()}, ${c()})`;
      }

      window.addEventListener('scroll', () => {
        const scroll = window.scrollY < 50;
        if (scroll) {
          this.stateComponent.nativeElement.setAttribute('style', `
            opacity:1;
          `)
        } else {
          this.stateComponent.nativeElement.setAttribute('style', `
            opacity:0;
          `)
        }
      })

      if (event instanceof NavigationStart) {
        this.start = Date.now();
        this.loading = true;
        this.currentLocation = this.router.url;
        this.activity = this.router.routerState.snapshot.root.queryParamMap.get('path');
        document.querySelector('html').setAttribute('style', `
          box-shadow:inset 0px 0px 5px ${getColor()} ;
        `);
      }

      if (event instanceof NavigationEnd ||
        event instanceof NavigationError ||
        event instanceof NavigationCancel) {
        this.end = Date.now();

        this.loading = false;
        this.currentLocation = this.router.url || 'Root';
        this.activity = queryMap.get('path') || 'None';
        this.outlet = queryMap.get('outlet') || 'None'
        this.performance = this.end - this.start;
      }
    });


  }


}
