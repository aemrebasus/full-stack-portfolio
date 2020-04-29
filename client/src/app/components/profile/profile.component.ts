import { Component, OnInit } from '@angular/core';
import { UserInterface } from '@app/models/User';
import { UserService } from '@services/user/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: UserInterface = {
    firstName: 'Ahmet',
    lastName: 'Emrebas',
    email: 'aemrebasus@gmail.com',
    organization: 'TechBig',
    role: 'Admin'

  };

  isSignedIn = false;
  errorMessage = 'No error message sent.';

  constructor(private userService: UserService) { }


  ngOnInit(): void {
    this.userService.getUserProfile()
      .subscribe(
        data => {
          this.user = data;
          this.isSignedIn = true;
        },
        err => this.errorMessage = err
      );
  }


}
