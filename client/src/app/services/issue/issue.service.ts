import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IssueInterface } from '@models';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  private readonly URI = '/api/v1/issues/';
  private readonly DELETE = (id: string) => this.URI.concat(id);


  constructor(private httpServie: HttpClient) { }

  get() {
    return this.httpServie.get(this.URI);
  }

  post(issue: IssueInterface) {
    return this.httpServie.post(this.URI, issue);
  }

  put(issue: IssueInterface) {
    return this.httpServie.put(this.URI, issue);
  }

  delete(issue: IssueInterface) {
    return this.httpServie.delete(this.DELETE(issue._id));
  }
}
