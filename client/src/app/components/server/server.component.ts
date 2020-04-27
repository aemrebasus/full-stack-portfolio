import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '@services/http/http.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {
  @Input() data;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.getServerInto().subscribe(data => {
      this.data = data;
    });
  }

}
