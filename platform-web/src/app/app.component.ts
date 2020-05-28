import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Project Management App';
  collapse = 'open-menu';
  constructor() {
  }
  ngOnInit(): void {
  }


  click() {
    if (this.collapse === 'open-menu') {
      this.collapse = 'close-menu';
    } else {
      this.collapse = 'open-menu';
    }
  }
}




