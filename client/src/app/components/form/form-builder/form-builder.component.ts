import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from './form-builder.meta';


@Component({
  selector: 'app-form-builder',
  template: `
  <app-input *ngFor="let input of form.inputs" [input]="input"></app-input>
  <input type="button" class="btn btn-success float-right m-3" (click)="submit()" value="Submit"/>
  <input type="reset" class="btn btn-warning m-3 float-right" (click)="reset()" value="Reset" />
  `,
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
