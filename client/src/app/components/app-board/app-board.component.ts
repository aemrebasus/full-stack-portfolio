import { Component, OnInit } from '@angular/core';
import { AuthService } from '@services/auth/auth.service';

@Component({
  selector: 'app-app-board',
  templateUrl: './app-board.component.html',
  styleUrls: ['./app-board.component.scss']
})
export class AppBoardComponent implements OnInit {


  public isSignedIn = true;

  constructor(private authService: AuthService) { }



  ngOnInit(): void {
    this.authService.isSignedIn()
      .subscribe(
        result => { this.isSignedIn = !!result; },
        err => { this.isSignedIn = false; }
      );
  }

}
