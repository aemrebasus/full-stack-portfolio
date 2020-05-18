import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dark-mode',
  templateUrl: './dark-mode.component.html',
  styleUrls: ['./dark-mode.component.scss']
})
export class DarkModeComponent implements OnInit {

  on = true;
  mode = 'dark';

  ngOnInit(): void {
  }


  toggle() {
    this.on = !this.on;
    this.mode = this.on ? 'dark' : 'light';
  }

}
