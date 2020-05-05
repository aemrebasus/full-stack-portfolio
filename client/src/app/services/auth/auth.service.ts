import { Injectable } from '@angular/core';
import { HttpService } from '@services/http/http.service';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpService: HttpService) { }


  isSignedIn() {
    return this.httpService.get('/api/v1/auth/isValidUser');
  }
}
