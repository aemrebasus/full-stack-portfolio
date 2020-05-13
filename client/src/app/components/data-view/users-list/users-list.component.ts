import { Component, OnInit } from '@angular/core';
import { IUser } from '@app/shared/datamodel/IUser';
import { StorageService } from '@services/storage/storage.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  users: IUser[] = [];
  constructor(private storage: StorageService) { }

  ngOnInit(): void {
    this.users = this.storage.getUsers();
  }

}
