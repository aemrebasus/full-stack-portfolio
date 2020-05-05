import { Component, OnInit, Input } from '@angular/core';
import { ConsoleButton } from './console-button.meta';

@Component({
  selector: 'app-console-button',
  templateUrl: './console-button.component.html'
})
export class ConsoleButtonComponent {
  @Input() button: ConsoleButton = new ConsoleButton('consoleButton', 'newUser', 'New User', 'primary');
}
