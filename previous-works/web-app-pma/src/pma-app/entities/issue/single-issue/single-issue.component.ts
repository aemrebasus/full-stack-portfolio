import { Component, OnInit, Input, Output } from '@angular/core';
import { IIssue } from '@pma-entity-modules/IEntities';
import { StateService } from '@pma/state/applicatin.state';

@Component({
  selector: 'app-issue-view',
  templateUrl: './single-issue.component.html'
})
export class IssueViewComponent implements OnInit {

  @Input() issue: IIssue;

  constructor(private stateService: StateService) { }

  ngOnInit(): void {

  }

  click(event) {
    event.type = event.type + '-issue';
    this.stateService.dispatch(event);
  }

}
