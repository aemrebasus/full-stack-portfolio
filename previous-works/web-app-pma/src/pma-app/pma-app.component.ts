import { Component, OnInit } from '@angular/core';
import { INavbarComponent } from '@shared/tnavbar/navbar/navbar.interface';
import { StateService } from '@pma/state/applicatin.state';
import { IIssue } from './entities/IEntities';
import { projectNavbar } from '@pma-entity-modules/project/project.resolver';
import { Router } from '@angular/router';



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
    private router: Router

  ) {


  }






  ngOnInit(): void {

    /**
     *  Add nav configuration of each entity.
     */
    this.navs = [
      projectNavbar(this.router)
    ];


  }



  menuClick(event: IIssue) {
    this.stateService.setCurrentIssue(event);
  }







}




