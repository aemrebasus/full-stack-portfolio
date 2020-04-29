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



  getServerInfo() {
    return this.get<IServerInfo>('/api/v1/information');
  }


  getDeveloperInfo() {
    return this.get<IUserBio>('/api/v1/developer');
  }

}
