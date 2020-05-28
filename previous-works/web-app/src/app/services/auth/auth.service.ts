import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService
  implements IAuthService {

  constructor(private httpService: HttpClient) { }

  login(param: any) {
    throw new Error("Method not implemented.");
  }
  
  logout() {
    throw new Error("Method not implemented.");
  }


}


interface IAuthService {
  /**
   *  1- send user credentials
   *  2- set user settings via user-setting service
   * @param param user credentials
   */
  login(param: any): any;

  /**
   * 1- clear user setting
   * 2- send logout request to server
   */
  logout(): any;


}