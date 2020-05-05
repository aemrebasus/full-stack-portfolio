import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from './form-builder.meta';


@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['../style.scss']
})
export class FormBuilderComponent {

  @Input() public form: FormBuilder = new FormBuilder();
  @Input() path: string;


  @Output() submitted = new EventEmitter();


  submit() {
    this.form.submit();

  }

  reset() {
    this.form.reset();
  }

}
