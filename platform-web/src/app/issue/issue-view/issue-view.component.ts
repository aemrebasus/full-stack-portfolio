import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-issue-view',
  templateUrl: './issue-view.component.html',
  styleUrls: ['./issue-view.component.scss']
})
export class IssueViewComponent implements OnInit {

  id: string;
  name: string;



  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.queryParamMap.subscribe(params => {
      this.id = params.get('id');
      this.name = params.get('name');
    })
  }

}
