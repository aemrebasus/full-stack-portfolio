import { Component, OnInit } from '@angular/core';
import { HttpService } from '@services/http/http.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../app/components/landing/style.scss', './style.scss']
})
export class AppComponent implements OnInit {
  title = 'Project Management';

  constructor(private httpService: HttpService, private router: Router) {

  }
  ngOnInit(): void {
    this.httpService.get('/api/v1/projects/all')
      .subscribe(
        response => { this.router.navigateByUrl('/app'); },
        err => { this.router.navigateByUrl('signin'); }
      );
  }


}
