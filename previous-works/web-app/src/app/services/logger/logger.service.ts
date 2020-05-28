import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor(private httpService: HttpClient) { }

  private error(where: any, err: Error) {
    const e: ILog = {
      message: `${err.message} <${where}> : ${err}`,
      stack: err.stack,
      meta: {
        where
      }
    };
    // TODO send the server.
    console.log(e);
  }




}

interface ILoggerService {

  /**
   * 1- send the error to the server
   * @param param ILog
   */
  error(param: any): any;

}

export interface ILog {
  meta?: any;
  message?: string;
  msg?: string;
  stack?: string;
}




