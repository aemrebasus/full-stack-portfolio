import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-card',
  templateUrl: './form-card.component.html'
})
export class FormCardComponent {

  @Input() color = 'warning';
  @Input() title = 'form name';

}
