import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@components/form-builder/form-builder.meta';
import { ICON } from '@components/form-builder/input/meta/icons';
import { Router } from '@angular/router';
import { HttpService } from '@services/http/http.service';
import { IProject } from '@app/shared/datamodel/IProject';

@Component({
  selector: 'app-app-board',
  templateUrl: './app-board.component.html',
  styleUrls: ['./app-board.component.scss']
})
export class AppBoardComponent implements OnInit {


  isSignedIn = false;

  constructor(private router: Router, private httpService: HttpService) {

  }
  form = new FormBuilder({ name: 'Dashboard', color: 'dark', isButtons: true });
  ngOnInit(): void {

    this.httpService.get<IProject[]>('/api/v1/projects/all')
      .subscribe(
        res => {
          this.isSignedIn = true;
          if (res) {
            this.form
              .addSelectElement('Projects', ICON.gear, res.map(p => p.name))
              .addConsoleButton('Projects', ICON.gear, '/app/projects')
              .addConsoleButton('New Project', ICON.gear, '/app/projectform')


              .addConsoleButton('Issues', ICON.user, '/app/issues', 'success')
              .addConsoleButton('New Issue', ICON.gear, '/app/issueform', 'success')


              .addConsoleButton('Users', ICON.user, '/app/users')
              .addConsoleButton('New User', ICON.user, '/app/userform')

              .addConsoleButton('Sign Out', ICON.user, '/signout', 'danger');

          } else {
            this.form.addConsoleButton('New Project', ICON.gear, '/app/projectform')
              .addConsoleButton('New User', ICON.user, '/app/userform', 'success')
              .addConsoleButton('Sign Out', ICON.user, '/signout', 'danger');
          }

        },
        err => {
          this.form
            .addConsoleButton('Sign In', ICON.user, '/signin', 'success')
            .addConsoleButton('Sign Up', ICON.building, '/signup', 'warning');
        }
      )


  }





}
