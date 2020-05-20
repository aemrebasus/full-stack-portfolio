import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  title: string = 'title';
  message: string = 'message';
  timestamp: string = new Date(Date.now()).toLocaleTimeString();
  type: string = 'warning';
  progress: number = 30;
  visible: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
