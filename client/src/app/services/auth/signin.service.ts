import { Injectable } from '@angular/core';
import { HttpService } from '@services/http/http.service';
import { ICredential } from '@app/models/ICredential';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  constructor(private httpService: HttpService) { }

  signin(credentials: ICredential) {
    return this.httpService.post<any>('/api/v1/signin', credentials);
  }
  signout() {
    return this.httpService.get<any>('/api/v1/signout');
  }
}
