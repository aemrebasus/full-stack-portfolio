import { Component, OnInit, Input } from '@angular/core';
import { IFormCardMeta } from './form-card.meta';

@Component({
  selector: 'app-form-card',
  templateUrl: './form-card.component.html'
})
export class FormCardComponent {
  @Input() meta: IFormCardMeta = {
    color: 'danger',
    title: 'angular title'
  };

}


