import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-console',
  templateUrl: './admin-console.component.html',
  styleUrls: ['./admin-console.component.scss']
})
export class AdminConsoleComponent implements OnInit {

  currentView = 'users';

  constructor() { }

  ngOnInit(): void {
  }

  setViewIssues() {
    this.currentView = 'issues';
  }

  setViewUsers() {
    this.currentView = 'users';
  }

}
