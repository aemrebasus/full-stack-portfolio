import { Component, Input, OnInit } from '@angular/core';
import { InputTypes } from './meta/types';
import { BaseInput } from './input.meta';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./style.scss']
})
export class InputComponent implements OnInit {

  public textInput: InputTypes[] = [
    'text', 'password', 'email', 'date', 'datetime', 'datetime-local', 'url', 'tel',
    'editable-list', 'search'
  ];

  public radioCheckBox: InputTypes[] = ['radio', 'checkbox'];

  public fileDialog: InputTypes[] = ['file'];

  public selectInput: InputTypes[] = ['select'];

  public buttonControl: InputTypes[] = ['button', 'reset'];


  @Input() input: BaseInput;


  ngOnInit() { }


}



