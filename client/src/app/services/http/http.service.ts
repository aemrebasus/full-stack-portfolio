import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }


  getServerInto() {
    return this.http.get<{ name: string, author: string, data: { start: string, end: string }, stack: string }>('/api/v1/information');
  }

}
