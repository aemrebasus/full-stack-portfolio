import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor(private httpService: HttpClient) { }

  private error(relative: any, err: Error) {
    const e: ILog = {
      message: `${err.message} <${relative}> : ${err}`,
      stack: err.stack,
      meta: {
        relative
      }
    };
    // TODO send the server.
    console.log(e);
  }

  errProjectRetrival(relative: any = '', err: Error) {
    this.error(relative, err);
  }




}

export interface ILog {
  meta?: any;
  message?: string;
  msg?: string;
  stack?: string;
}




