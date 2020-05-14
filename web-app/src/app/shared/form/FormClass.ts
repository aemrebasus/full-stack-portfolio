
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

export class FormClass {

  form: FormGroup;
  inputs: IInput[];

  submitLabel = 'Set the submitLabel varible!'


  constructor(public formbuilder: FormBuilder) {
  }

  public getControl(controlName: string): FormControl {
    return this.form.controls[controlName] as FormControl;
  }

  public setControlValue(controlName: string, value: string) {
    this.getControl(controlName).setValue(value);
  }

  public getControlValue(controlname: string) {
    return this.getControl(controlname).value;
  }

  public valid(name: string): boolean {
    const c = this.getControl(name);
    return c.valid && (c.touched && c.dirty);
  }

  public invalid(name: string): boolean {
    const c = this.getControl(name);
    return c.invalid && (c.touched && c.dirty);
  }

  public onSubmit() {
    throw new Error('onSubmit method not implemented yet.');
  }


  public goBack() {
    throw new Error('goBack method not implemented yet.');
  }


}

export interface IInput {
  type?: string;
  helperText?: string;
  label?: string;
  name?: string;
  autocomplete?: string;
}


