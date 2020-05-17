import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  banners = ['Ahmet just posted an issue', 'JD solved the issue #55', 'Myk posted a new comment on issue #55', 'Jayda needs help on his task #78', 'Ahmet just posted an issue']

  banner = 'Ahmet just posted an issues.';

  loop = true;

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      if (this.loop) {
        this.banner = this.banners[this.banners.indexOf(this.banner) + 1]
      }
    }, 2000);
  }


  pause(event) {
    console.log(event.currentTarget);
    this.loop = false;
  }

  start() {
    this.loop = true;
  }


}
