import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '@services/http/http.service';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.style.scss']
})
export class NavigationComponent {

  constructor(private router: Router, private httpService: HttpService) { }

  signOut() {
    this.httpService.get('/api/v1/signout', { responseType: 'text' })
      .subscribe(
        (response) => alert(response),
        (err) => alert(err)
      );
  }
}
