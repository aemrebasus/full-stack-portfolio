import { Component, OnInit } from '@angular/core';
import { ConsoleButton } from '@components/form/console-button/console-button.meta';
import { IProject } from '@app/shared/IProject';
import { HttpService } from '@services/http/http.service';

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.scss']
})
export class ConsoleComponent implements OnInit {

  public projects: IProject[];

  constructor(private httpService: HttpService) { }

  public buttons: ConsoleButton[];




  ngOnInit(): void {

    this.httpService.get<IProject[]>('/api/v1/projects/all')
      .subscribe(
        response => {
          if (response.length > 0) {
            this.projects = response;
          }

          if (this.projects) {
            this.buttons = [
              new ConsoleButton('dashboard', 'Dashboard', 'dashboard', 'warning'),
              new ConsoleButton('project', 'New Project', 'newproject', 'primary'),
              new ConsoleButton('sprint', 'New Sprint', 'newsprint', 'primary'),
              new ConsoleButton('issue', 'New Issue', 'newissue', 'primary'),
              new ConsoleButton('user', 'New User', 'newuser', 'primary'),
              new ConsoleButton('issue', 'Issues', 'issues', 'info'),
              new ConsoleButton('users', 'Users', 'users', 'info'),
            ];
          } else {
            this.buttons = [new ConsoleButton('project', 'New Project', 'newproject', 'primary')];
          }

        },
        err => alert(err.message || err)
      )



  }

}
