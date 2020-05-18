import { Injectable } from '@angular/core';
import { INavbar } from 'src/themes/theme/navbar/navbar.component';

@Injectable({
  providedIn: 'root'
})
export class ThemeDataService {

  constructor() { }

  navbar(): INavbar {
    const navbar: INavbar = [
      { name: 'Document', subs: ['New Project', 'Logout'] },
      { name: 'Setting', subs: ['Profile', 'Account', 'Subscription'] }
    ]

    return navbar;
  }
}
