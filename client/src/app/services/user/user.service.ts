import { Injectable } from '@angular/core';
import { HttpService } from '@services/http/http.service';
import { UserInterface } from '@app/models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly URI = '/api/v1/users/';
  private readonly DELETE = (id: string) => this.URI.concat(id);

  constructor(private httpService: HttpService) { }

  /**
   * @deprecated
   */
  getUserProfile() {
    return this.httpService.get<UserInterface>('/api/v1/users/currentuser');
  }


  get() {
    return this.httpService.get(this.URI);
  }

  post(user: UserInterface) {
    return this.httpService.post<UserInterface>('/api/v1/users', user);
  }

  put(user: UserInterface) {
    return this.httpService.put(this.URI, user);
  }

  delete(user: UserInterface) {
    return this.httpService.delete(this.URI, user);
  }
}
