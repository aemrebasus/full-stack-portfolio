import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ACCESSES, SERVICES, UserSettingService } from '@services/user/user-setting.service';

import { DataService } from '@services/data/data.service';
import { ViewSettingService } from '@services/view/view-setting.service';

@Injectable({
  providedIn: 'root'
})
export class MultipleViewResolverService implements Resolve<IViewData> {

  constructor(
    private dataService: DataService,
    private userSettingService: UserSettingService,
    private viewSettingService: ViewSettingService
  ) { }


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): IViewData | Observable<IViewData> | Promise<IViewData> {


    const data: IViewData | any = {};

    /**
     * Set the view data
     */
    this.dataService.getData(state.url).then(result => {
      data.data = result;
    });

    // /**
    //  * set the view meta
    //  */
    this.viewSettingService.view(state.url).then(setting => {
      data.meta = setting;
    });

    /**
     * get user auth
     */
    this.userSettingService.getUserPermissions().then(permissions => {
      data.auth = permissions;
    });



    return of(data);
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


  /**
   * Contains user accessability rules
   */
  auth: IAuthMetaData;
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


}



export interface IAuthMetaData {
  /**
   * Define the user's authority to manipulate the entity also hide the unauthorized view components like edit button, delete button
   *  'UPDATE' | 'DELETE' | 'VIEW' | 'CREATE' ETC.
   */
  accesses?: (ACCESSES | string)[];



  /**
   * List of services that avalilable for a specific user like searching service.
   */
  services?: (SERVICES | string)[];
}



