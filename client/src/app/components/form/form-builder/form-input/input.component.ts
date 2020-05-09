import { Component, Input, OnInit } from '@angular/core';
import { IBaseInput, InputText, ICON, InputTypes } from './input.meta';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./style.scss']
})
export class InputComponent implements OnInit {

  public textInput: InputTypes[] = ['text', 'password', 'email', 'date', 'datetime', 'datetime-local', 'url', 'tel', 'editable-list'];

  public fileDialog: InputTypes[] = ['file'];

  public selectInput: InputTypes[] = ['select'];

  public buttonControl: InputTypes[] = ['button', 'reset'];

  @Input() input = new InputText().setMeta({
    type: 'text',
    label: 'Click',
    buttonLabel: 'click',
    color: 'danger',
    icon: ICON.user,
    onClick: () => alert(this.input.meta.value)
  });

  ngOnInit() { }


}



