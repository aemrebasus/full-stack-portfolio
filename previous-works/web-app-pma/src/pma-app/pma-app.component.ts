import { Component, OnInit } from '@angular/core';
import { INavbarComponent } from '@shared/tnavbar/navbar/navbar.interface';
import { StateService } from '@pma/state/applicatin.state';
import { IIssue } from './entities/IEntities';
import { projectNavbar } from '@pma-entity-modules/project/project.resolver';
import { Router } from '@angular/router';
import { ILeftMenuData, ILeftMenuSingleData } from '@shared/tmain-list/left-menu/left-menu.component';



@Component({
  selector: 'app-main',
  templateUrl: './pma-app.component.html',
  styleUrls: ['./shared/style/all.scss']
})
export class PmaAppComponent implements OnInit {


  navs: INavbarComponent[];

  banners = ['Hello', 'My Name is Ahmet', 'I am a full stack developoer', 'Angular Master', 'Creative Designer', 'Hello'];



  issues: ILeftMenuData;

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



    this.issues = this.stateService.getIssues().map<ILeftMenuSingleData>(e => {
      return { id: e.id, values: [e.title, e.description], pills: e.meta.tags } as ILeftMenuSingleData;
    });

  }



  // event is id of the issue.
  menuClick(event: string) {
    // const pID = this.stateService.getCurrentProject().id;
    this.issue = this.stateService.getIssueByID(event);

  }

  // event is the passed data to the single-view component.
  issueHandler(event: any) {

  }




  projectName() {
    return this.stateService.getCurrentProject().name + ' - Issues';
  }





}




