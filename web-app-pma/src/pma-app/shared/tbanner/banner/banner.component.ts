import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  @Input() banners = ['Ahmet just posted an issue', 'JD solved the issue #55',
    'Myk posted a new comment on issue #55', 'Jayda needs help on his task #78', 'Ahmet just posted an issue']

  banner = 'Ahmet just posted an issues.';

  loop = true;

  colors = ['light', 'dark', 'warning', 'light', 'danger', 'primary', 'light'];

  textColor = 'light';

  bgColor = 'dark';


  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      if (this.loop) {
        this.banner = this.banners[this.banners.indexOf(this.banner) + 1];
        this.textColor = this.colors[this.colors.indexOf(this.textColor) + 1];
        this.bgColor = this.colors[this.colors.indexOf(this.bgColor) + 1];
      }
    }, 2000);
  }


  pause(event) {
    this.loop = false;
  }

  start() {
    this.loop = true;
  }


}
