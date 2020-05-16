import { Component, Directive, Input, ViewChild, AfterViewInit } from '@angular/core';

@Directive({ selector: 'pane' })
export class Pane {
  @Input() id: string;

}




@Component({
  selector: 'example-app',
  templateUrl: './view-child.component.html'
})
export class ViewChildComp implements AfterViewInit {

  @ViewChild(Pane)
  set pane(id: number) {
    id = 100;
  };


  toggle() {
    this.pane
  }

  ngAfterViewInit(): void {

  }

}