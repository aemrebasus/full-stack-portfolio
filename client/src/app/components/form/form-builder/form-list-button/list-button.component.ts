import { Component, Input } from '@angular/core';
import { ConsoleButton } from '../../console-button/console-button.meta';

@Component({
  selector: 'app-list-button',
  templateUrl: './list-button.component.html'
})
export class ListButtonComponent {

  @Input() buttons: ConsoleButton[] = [
    new ConsoleButton('dashboard', 'Dashboard', 'Dashboard', 'primary')
  ];
}
