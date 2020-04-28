import { Component, OnInit } from '@angular/core';
import { SigninService } from '@services/auth/signin.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styles: ['.active{ border-bottom:thin solid white;}']
})
export class NavigationComponent implements OnInit {

  constructor(private siginService: SigninService, private router: Router) { }

  ngOnInit(): void {

  }

  signout() {
    this.siginService
      .signout()
      .subscribe(
        data => {
          /**
           * Alert comes after the navigation becasue it stops the navigation.
           */
          alert(data.msg);
        },
        error => { alert(error); }
      );
  }

}
