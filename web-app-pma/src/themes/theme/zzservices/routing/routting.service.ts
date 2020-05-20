import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PMA_BASE_ROUTE } from '../consts';

@Injectable({
  providedIn: 'root'
})
export class RoutingService {

  constructor(private router: Router, private route: ActivatedRoute) { }

  /**
   * return outlet
   */
  outlet() {
    return this.router.routerState.root.snapshot.queryParamMap.get('outlet');
  }

  toOutletObject(outlet: string, path: any) {
    const outlets = {};
    outlets[outlet] = path;
    return { outlets };
  }


  openOutlet(outlet: string, path: string) {

    this.router.navigate(
      [
        this.router.url,
        this.toOutletObject(outlet, path)
      ],
      { queryParams: { path, outlet } }

    ).catch(err => {
      // TODO....
    });

  }



  closeOutlet() {
    this.router.navigate(
      [
        '../' + PMA_BASE_ROUTE,
        this.toOutletObject(this.outlet(), null)
      ]
    );
  }
}
