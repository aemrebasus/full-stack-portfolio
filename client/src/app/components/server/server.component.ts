import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '@services/http/http.service';
import { IServerInfo } from '@app/entities';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {

  @Input() data: IServerInfo;

  errorMessage: string;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.getServerInfo().subscribe(
      data => this.data = data,
      error => this.errorMessage = error
    );
  }

}
