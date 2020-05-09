import { Component, Input, OnInit } from '@angular/core';
import { IBaseInput, InputText, ICON } from './input.meta';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./style.scss']
})
export class InputComponent implements OnInit {

  public textInput: string[] = ['text', 'password', 'email', 'date', 'datetime', 'datetime-local', 'url', 'tel'];

  public fileDialog = ['file'];

  public dataList = ['datalist'];

  public selectInput = ['select'];




  @Input() input: IBaseInput = new InputText().setMeta({
    type: 'select',
    label: 'Label',
    // icon: ICON.user,
    buttonLabel: 'Select file',
    fileType: 'image/*',
    options: ['option 1', 'option 2'],
    multiple: true
  });

  ngOnInit() {


  }

}
