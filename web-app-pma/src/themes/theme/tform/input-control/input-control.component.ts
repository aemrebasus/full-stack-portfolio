import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, ValidationErrors } from '@angular/forms';
import { IInput } from '@tform/reactive-form/reactive-form.interfaces';


@Component({
  selector: 'app-input-control',
  templateUrl: './input-control.component.html',
  styleUrls: ['./input-control.component.scss']
})
export class InputControlComponent implements OnInit {

  @Input() input: IInput = {
    placeholder: 'Not Defined(placeholder)',
    helperText: 'Not Defined(helperText',
    label: 'Not Defined(label)',
    name: 'Not Defined(name)',
    type: 'text',
  };
  inputControl: FormControl;

  @Output() control = new EventEmitter<{ name: string, control: FormControl }>();


  constructor() { }

  ngOnInit(): void {

    this.inputControl = new FormControl(this.input.name, this.input.validators);

    setTimeout(() => {
      this.control.emit({ name: this.input.name, control: this.inputControl });
    }, 200)
  }


  valid(): boolean {
    return this.inputControl.valid && (this.inputControl.touched && this.inputControl.dirty);
  }

  invalid(): boolean {
    return this.inputControl.invalid && (this.inputControl.touched && this.inputControl.dirty);
  }

  errors(): ValidationErrors {
    return this.inputControl.errors;
  }

  value() {
    return this.inputControl.value;
  }

  name() {
    return this.input.name;
  }

}
