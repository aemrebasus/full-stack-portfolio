import { Component } from '@angular/core';
import { HttpService } from '@services/http/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signout-confirm',
  templateUrl: './signout-confirm.component.html'
})
export class SignoutConfirmComponent {
  constructor(private httpService: HttpService, private router: Router) {

  }
  signout() {
    this.httpService.signOut().subscribe();
    this.router.navigateByUrl('/app');
  }

  goback() {
    this.router.navigateByUrl('/app')
  }
}
