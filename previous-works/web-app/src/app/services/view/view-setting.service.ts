import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewSettingService {

  constructor() { }


  projects() {
    return new Promise((res, rej) => {
      res({
        header: true,
        title: 'All Projects',
        type: 'projects'
      })
    })
  }


  view(path: string) {
    if (path === '/projects') {
      return this.projects();
    }
    throw new Error('Path does not match any view setting!')
  }


}



interface IViewSetting {
  /**
   * @returns the view setting of the projects' view
   */
  projects(): any;

  /**
   * @returns the view setting of the named view corrsponding with the current path.
   */
  view(path: string): any;
}
