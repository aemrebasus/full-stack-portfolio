import { Component, OnInit } from '@angular/core';
import { HttpService } from '@services/http/http.service';
import { IUser } from '@app/shared/datamodel/IUser';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  users: IUser[] = [];
  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.get<IUser[]>('/api/v1/users/all')
      .subscribe(
        response => this.users = response
      )
  }

}
