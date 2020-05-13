import { Component, OnInit } from '@angular/core';
import { IIssue } from '@app/shared/datamodel/IIssue';
import { StorageService } from '@services/storage/storage.service';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.scss']
})
export class IssuesComponent implements OnInit {

  public issues: IIssue[] = [];

  constructor(private storage: StorageService) { }

  ngOnInit(): void {
    this.issues = this.storage.getIssues();
  }
}