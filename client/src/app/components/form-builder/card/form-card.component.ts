import { Component, Input } from '@angular/core';
import { IColors } from '../input/meta/types';

@Component({
  selector: 'app-form-card',
  templateUrl: './form-card.component.html'
})
export class FormCardComponent {

  @Input() title: string = 'Form Name';
  @Input() color: IColors = 'primary';


}


