import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@components/form-builder/form-builder.meta';
import { ICON } from '@components/form-builder/input/meta/icons';
import { Router } from '@angular/router';
import { HttpService } from '@services/http/http.service';
import { IProject } from '@app/shared/datamodel/IProject';
import { StorageService } from '@services/storage/storage.service';

@Component({
  selector: 'app-app-board',
  templateUrl: './app-board.component.html',
  styleUrls: ['./app-board.component.scss']
})
export class AppBoardComponent implements OnInit {


  isSignedIn = false;

  constructor(private router: Router, private storage: StorageService) {

  }

  form = new FormBuilder({ isButtons: true });

  ngOnInit(): void {
    this.storage.updateStorage();

    setTimeout(() => {


      const projects = this.storage.getProjects();
      console.log(projects);
      if (projects.length > 0) {
        this.isSignedIn = true;

        this.form
          .addSelectElement('Projects', ICON.gear, projects.map(p => p.name), (e) => { this.storage.setCurrentProject(e.meta.value[0]) })

          .addConsoleButton('Projects', ICON.gear, '/app/projects')
          .addConsoleButton('New Project', ICON.gear, '/app/projectform')


          .addConsoleButton('Issues', ICON.user, '/app/issues', 'success')
          .addConsoleButton('New Issue', ICON.gear, '/app/issueform', 'success')


          .addConsoleButton('Users', ICON.user, '/app/users')
          .addConsoleButton('New User', ICON.user, '/app/userform')

          .addConsoleButton('Sign Out', ICON.user, '/signout', 'danger');

      }

      if (projects.length === 0) {
        this.isSignedIn = true;

        this.form.addConsoleButton('New Project', ICON.gear, '/app/projectform')
          .addConsoleButton('New User', ICON.user, '/app/userform', 'success')
          .addConsoleButton('Sign Out', ICON.user, '/signout', 'danger');
      } else {

        this.form
          .addConsoleButton('Sign In', ICON.user, '/signin', 'success')
          .addConsoleButton('Sign Up', ICON.building, '/signup', 'warning');

      }

    }, 2000);


  }





}
