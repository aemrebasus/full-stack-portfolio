import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-board',
  templateUrl: './app-board.component.html',
  styleUrls: ['./app-board.component.scss']
})
export class AppBoardComponent implements OnInit {


  public isSignedIn = true;

  constructor() { }

  ngOnInit(): void {
  
  }

}
