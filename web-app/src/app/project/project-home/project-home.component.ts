import { Component, OnInit } from '@angular/core';
import { slideAnimation } from '@sharedModule/animation/animation';

@Component({
  selector: 'app-project-home',
  templateUrl: './project-home.component.html',
  styleUrls: ['./project-home.component.scss'],
  animations: [slideAnimation]
})
export class ProjectHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
