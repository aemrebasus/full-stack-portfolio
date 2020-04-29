import { Component, OnInit } from '@angular/core';
import { IssueInterface } from '@models';

@Component({
  selector: 'app-issue-view',
  templateUrl: './issue-view.component.html',
  styleUrls: ['./issue-view.component.scss']
})
export class IssueViewComponent implements OnInit {

  issues: IssueInterface[] = [
    {
      title: 'First issues',
      assignee: {
        email: 'aemrebasus@gmail.com'
      },
      description: 'Create issue-view component',
      status: 'todo',
      createdOn: new Date(Date.now()).toDateString(),
      comments: [
        {
          createdOn: new Date(Date.now()).toDateString(),
          comment: 'Commnet 1',
          userId: 'aemrebasus@gmail.com'
        },
        {
          createdOn: new Date(Date.now()).toDateString(),
          comment: 'Commnet 2',
          userId: 'aemrebasus@gmail.com'
        },
        {
          createdOn: new Date(Date.now()).toDateString(),
          comment: 'Commnet 3',
          userId: 'aemrebasus@gmail.com'
        }
      ]
    },
    {
      title: 'Second issues',
      assignee: {
        email: 'erdi@gmail.com'
      },
      description: 'Create Admin Console',
      status: 'todo',
      createdOn: new Date(Date.now()).toDateString(),
      comments: [
        {
          createdOn: new Date(Date.now()).toDateString(),
          comment: 'Comment 1 ',
          userId: 'cevad@gmail.com'
        },
        {
          createdOn: new Date(Date.now()).toDateString(),
          comment: 'Comment 1 ',
          userId: 'ms@gmail.com'
        }
      ]
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
