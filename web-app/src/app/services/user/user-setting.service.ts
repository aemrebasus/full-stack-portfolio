import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserSettingService
  implements IUserService {

  userSettings: any;

  constructor(private httpService: HttpClient) { }


  getUserSetting() {
    return this.httpService.get('');
  }

  getUserPermissions() {
    return new Promise((res, rej) => {
      const permissions = {
        accesses: [ACCESSES.DELETE, ACCESSES.VIEW, ACCESSES.CREATE, ACCESSES.UPDATE],
        services: [SERVICES.MESSAGE, SERVICES.SEARCH]
      };
      res(permissions);
    })
  }


}



interface IUserService {
  getUserSetting(): any;
}


interface IUserSetting {
  username: string;
  accesses: ACCESSES[];
}


export enum ACCESSES {
  UPDATE = 'UPDATE',
  DELETE = 'DELETE',
  CREATE = 'CREATE',
  VIEW = 'VIEW'
}

export enum SERVICES {
  MESSAGE = 'MESSAGE',
  SEARCH = 'SEARCH'
}




