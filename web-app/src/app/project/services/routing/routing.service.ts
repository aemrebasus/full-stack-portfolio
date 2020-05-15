import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoutingService {

  constructor() { }


  private route(router: Router, path?: (string | number)[], extra: object = {}) {
    router.navigate([...path, extra], { queryParamsHandling: 'preserve' });
  }

  home(router: Router, path?: (string | number)[], extra?: object) {
    this.route(router, path);
  }

  projects(router: Router, extra?: object) {

    this.route(router, ['/projects'], extra);
  }

  editProject(router: Router, path?: (string | number)[], extra?: object) {
    this.route(router, ['/projects', ...path, 'edit'], extra);
  }
}

