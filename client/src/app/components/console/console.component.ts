import { Component, OnInit } from '@angular/core';
import { ConsoleButton } from '@components/form/console-button/console-button.meta';

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.scss']
})
export class ConsoleComponent implements OnInit {

  constructor() { }

  buttons: ConsoleButton[] = [
    new ConsoleButton('dashboard', 'Dashboard', 'Dashboard', 'warning'),
    new ConsoleButton('project', 'New Project', 'newproject', 'primary'),
    new ConsoleButton('sprint', 'New Sprint', 'newsprint', 'primary'),
    new ConsoleButton('issue', 'New Issue', 'newissue', 'primary'),
    new ConsoleButton('user', 'New User', 'newuser', 'primary'),
    new ConsoleButton('issue', 'Issues', 'issues', 'info'),
    new ConsoleButton('users', 'Users', 'users', 'info'),

  ];


  ngOnInit(): void {
  }

}
