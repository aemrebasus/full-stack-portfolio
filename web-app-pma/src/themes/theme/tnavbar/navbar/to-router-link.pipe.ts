import { Pipe, PipeTransform } from '@angular/core';
import { INavbarItem } from './navbar.component';

@Pipe({
  name: 'toRouterLink'
})
export class ToRouterLinkPipe implements PipeTransform {

  transform(value: INavbarItem, ...args: unknown[]): unknown {
    const outlets = {};
    outlets[value.outlet] = [value.path];
    return ['/pma/home', { outlets }];
  }

}
