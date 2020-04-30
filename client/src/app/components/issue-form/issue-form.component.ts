import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IssueInterface } from '@models';
import { IssueService } from '@services/issue/issue.service';

@Component({
  selector: 'app-issue-form',
  templateUrl: './issue-form.component.html',
  styleUrls: ['./issue-form.component.scss']
})
export class IssueFormComponent implements OnInit {

  issue: IssueInterface = {};

  constructor(private issueService: IssueService) { }

  ngOnInit(): void {
  }

  post() {
    this.issueService.post(this.issue)
      .subscribe(
        res => { alert(res); },
        err => alert(err.message)
      );
  }
}
