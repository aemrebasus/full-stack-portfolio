import { Component, Input } from '@angular/core';
import { FormInput } from './input.meta';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['../style.scss']
})
export class InputComponent {
  @Input() input: FormInput;
}
