import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IServerInfo, IUserBio } from '@app/models';
import { retry, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      /**
       * Client-side error
       */
      errorMessage = `Error: ${error.error.message}`;


    } else if (error.status || error.message) {

      /**
       * Server-side error
       */
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;

    }

    /**
     * Other errors.
     */
    return throwError(errorMessage);
  }



  /**
   * @deprecated
   */
  getServerInfo() {
    return this.get<IServerInfo>('/api/v1/information');
  }

  /**
   * @deprecated
   */
  getDeveloperInfo() {
    return this.get<IUserBio>('/api/v1/developer');
  }


  get<T>(path: string) {
    return this.http.get<T>(path)
      .pipe(
        retry(2),
        catchError(this.errorHandler)
      );
  }

  post<T>(path: string, body: T, options?: object) {
    return this.http.post<T>(path, body, options)
      .pipe(
        retry(2),
        catchError(this.errorHandler)
      );
  }


  put<T>(path: string, body: T, options?: object) {
    return this.http.put<T>(path, body, options)
      .pipe(
        retry(2),
        catchError(this.errorHandler)
      );
  }

  delete<T>(path: string, options?: object) {
    return this.http.delete<T>(path, options)
      .pipe(
        retry(2),
        catchError(this.errorHandler)
      );
  }



}
