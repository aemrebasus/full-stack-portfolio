import { Component, OnInit } from '@angular/core';
import { IssueService } from '@services/issue/issue.service';
import { IssueInterface } from '@models';

@Component({
  selector: 'app-issue-update',
  templateUrl: './issue-update.component.html',
  styleUrls: ['./issue-update.component.scss']
})
export class IssueUpdateComponent implements OnInit {

  issue: IssueInterface = {}
  constructor(private issueService: IssueService) { }

  ngOnInit(): void {
  }

  put() {
    this.issueService.put(this.issue)
      .subscribe(res => {
        alert(res);
      },
        err => {
          alert(err);
        }
      )
  }
}
