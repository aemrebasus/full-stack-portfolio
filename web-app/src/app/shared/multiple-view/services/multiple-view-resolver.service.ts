import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MultipleViewResolverService implements Resolve<IViewData> {

  constructor() { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): IViewData | Observable<IViewData> | Promise<IViewData> {
    return of({
      meta: {
        header: false,
        title: 'User View',
        type: 'user',
        accesses: [ACCESSES.DELETE, ACCESSES.VIEW, ACCESSES.CREATE, ACCESSES.UPDATE],
        services: [SERVICES.MESSAGE, SERVICES.SEARCH]
      },
      data: [
        { id: '400', name: 'Cevdet Acikgoz', lastName: 'Wooow there.' },
        { id: '1', name: 'Ahmet Emrebas' },
        { id: '20', name: 'Muhittin Kara' },
        { id: '3', name: 'Cevdet Acikgoz' },
      ]
    });
  }
}


export interface IViewData {
  /**
   * Inforamtion about the view page like title, name or any thing that related to the template.
   */
  meta: IViewMetaData;

  /**
   * Data that will be rendered with the template.
   */
  data: any[];
}




export interface IViewMetaData {
  /**
   * type of this entity as string
   */
  type?: string;
  /**
   * programatic name
   */
  name?: string;

  /**
   * Title will be shown on the html view page.
   */
  title?: string;

  /**
   * Error message will be shown if any;
   */
  errorMessage?: string;

  /**
   * set this true if the first item in the data set is the description of the table header!!!
   * if false, the first item will be used to generate headers. 
   * !!! it is not a problem if the first item has the most of the fields 
   * !!! if it does not,  view will look a bit weird.
   */
  header?: boolean;



  /**
   * Define the user's authority to manipulate the entity also hide the unauthorized view components like edit button, delete button
   *  'UPDATE' | 'DELETE' | 'VIEW' | 'CREATE' ETC.
   */
  accesses?: (ACCESSES | string)[];



  /**
   * List of services that avalilable for a specific user like searching service.
   */
  services?: SERVICES[];

}

export enum ACCESSES {
  UPDATE = 'UPDATE',
  DELETE = 'DELETE',
  CREATE = 'CREATE',
  VIEW = 'VIEW'
}

export enum SERVICES {
  MESSAGE, SEARCH
}

// export interface IProjectResolved<T> {
  //   resolved?: T | T[];
  //   error?: any;
  // }

  // export interface IEntity {
    //   meta?: {};
    //   _id?: string | number;
    // }

    // export interface IPageMeta<T = any> {
      //   meta?: {
        //     errorMessage?: string;
//     pageTitle?: string;
//   };
//   data?: T[];
// }

