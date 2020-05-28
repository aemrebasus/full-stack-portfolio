import { Pipe, PipeTransform } from '@angular/core';
import { INavbarComponent } from './navbar.interface';

@Pipe({
  name: 'toRouterLink'
})
export class ToRouterLinkPipe implements PipeTransform {

  transform(value: INavbarComponent, ...args: unknown[]): unknown {
    const outlets = {};
    outlets[value.outlet] = [value.path];
    return ['/pma/home', { outlets }];
  }

}
