import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  title = 'title';
  message = 'message';
  timestamp = new Date(Date.now()).toLocaleTimeString();
  type = 'warning';
  progress = 30;
  visible = true;

  constructor() { }

  ngOnInit(): void {
  }

}
