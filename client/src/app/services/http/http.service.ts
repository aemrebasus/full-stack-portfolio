import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IServerInfo, IUserBio } from '@app/entities';
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

  getServerInfo() {
    return this.http.get<IServerInfo>('/api/v1/information')
      .pipe(
        retry(2),
        catchError(this.errorHandler)
      );
  }


  getDeveloperInfo() {
    return this.http.get<IUserBio>('/api/v1/developer')
      .pipe(
        retry(2),
        catchError(this.errorHandler)
      );
  }

}
