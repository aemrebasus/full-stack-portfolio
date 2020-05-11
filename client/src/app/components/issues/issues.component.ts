import { Component, OnInit } from '@angular/core';
import { IIssue } from '@app/shared/datamodel/IIssue';
import { HttpService } from '@services/http/http.service';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.scss']
})
export class IssuesComponent implements OnInit {

  public issues: IIssue[] = []

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.get<IIssue[]>('/api/v1/issues/all')
      .subscribe(
        response => this.issues = response
    )
  }
}


// export interface IIssue {
//   _id?: IID;
//   userId?: IID;
//   organizationId?: string;
//   projectId?: string;
//   title?: string;
//   description?: string;
//   status?: IIssueStatus;
//   createdOn?: Date;
// }
