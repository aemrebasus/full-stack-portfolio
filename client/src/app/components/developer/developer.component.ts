import { Component, OnInit } from '@angular/core';
import { IUserBio } from '@app/models';
import { HttpService } from '@services/http/http.service';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.scss']
})
export class DeveloperComponent implements OnInit {

  data: IUserBio;

  errorMessage = 'Developer data cound not be fetched.';

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.getDeveloperInfo().subscribe(
      data => this.data = data,
      error => this.errorMessage = error
    );
  }

}
