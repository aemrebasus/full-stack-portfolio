import { Injectable } from '@angular/core';
import { HttpService } from '@services/http/http.service';
import { UserInterface } from '@app/models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService: HttpService) { }

  getUserProfile() {
    return this.httpService.get<UserInterface>('/api/v1/users/currentuser');
  }
}
