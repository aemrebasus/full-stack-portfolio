import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
      errorMessage = `Error: ${error.error.message}`;
    } else if (error.status || error.message) {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }

  get<T>(path: string, options?: object) {
    return this.http.get<T>(path, options);
  }

  post<T>(path: string, body: T, options?: object) {
    return this.http.post<T>(path, body, options);
  }


  put<T>(path: string, body: T, options?: object) {
    return this.http.put<T>(path, body, options);
  }

  delete<T>(path: string, options?: object) {
    return this.http.delete<T>(path, options);
  }


  signIn(form: any) {
    return this.post('/api/v1/signup', form);
  }

  signOut() {
    return this.get('/api/v1/signout'); 
  }
}
