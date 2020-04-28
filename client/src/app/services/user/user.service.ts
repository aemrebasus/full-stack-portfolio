import { Injectable } from '@angular/core';
import { HttpService } from '@services/http/http.service';
import { IUser } from '@app/entities/IUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService: HttpService) { }

  getUserProfile() {
    return this.httpService.get<IUser>('/api/v1/users/currentuser');
  }
}
