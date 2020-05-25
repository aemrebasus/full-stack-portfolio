import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { INavbarComponent } from '@shared/tnavbar/navbar/navbar.interface';
import { StateService } from '@pma/state/applicatin.state';
import { IIssue } from './entities/IEntities';
import { ProjectService } from '@pma-entity-modules/project/project.service';


@Component({
  selector: 'app-main',
  templateUrl: './pma-app.component.html',
  styleUrls: ['./shared/style/all.scss']
})
export class PmaAppComponent implements OnInit {

  navs: INavbarComponent[];

  banners = ['Ahmet', 'Emrebas', 'Ahmet'];

  issues: IIssue[];

  issue: IIssue;

  constructor(
    private stateService: StateService,
    private projectService: ProjectService,
    private router: Router
  ) {


  }






  ngOnInit(): void {

    /**
     *
     *
     *  Add nav configuration of each entity.
     */
    this.navs = [
      this.projectService.toNavbarItem()
    ];



    /**
     * Initialize the issues
     */
    this.issues = this.stateService.getIssues();




  }



  menuClick(event: IIssue) {
    this.stateService.setCurrentIssue(event);
  }







}




