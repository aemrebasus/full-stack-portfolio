import { Component, OnInit } from '@angular/core';
import { IssueService } from '@services/issue/issue.service';
import { IssueInterface } from '@models';

@Component({
  selector: 'app-issue-delete',
  templateUrl: './issue-delete.component.html',
  styleUrls: ['./issue-delete.component.scss']
})
export class IssueDeleteComponent implements OnInit {

  issue: IssueInterface = {

  }

  constructor(private issueService: IssueService) { }

  ngOnInit(): void {
  }

  delete() {
    this.issueService.delete(this.issue)
      .subscribe(
        res => alert(res),
        err => alert(err.message)
      );
  }
}
