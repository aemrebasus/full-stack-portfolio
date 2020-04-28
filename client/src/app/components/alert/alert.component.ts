import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  template: `
  <div class="alert alert-{{type}}" role="alert">
    <p>{{message}}</p>
  </div>
`
})
export class AlertComponent implements OnInit {


  @Input() type: 'success' | 'danger' | 'info';
  @Input() message: string;

  constructor() { }

  ngOnInit(): void {
  }

}
