import { Component, OnInit, Input } from '@angular/core';
import { IIssue } from '@pma/core/IEntities';
import { StateService } from '@pma/state/applicatin.state';
import { IViewEventArg } from '@pma/core/core';
@Component({
  selector: 'app-issue-view',
  templateUrl: './template.html',
  styleUrls: ['../../shared/style/all.scss']
})
export class IssueViewComponent implements OnInit {

  @Input() issue: IIssue;

  constructor(private stateService: StateService) { }

  ngOnInit(): void {

  }

  click(event: IViewEventArg) {
    this.stateService.dispatch(event);
  }

}
