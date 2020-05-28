import { FormControl, FormGroup, ValidationErrors } from '@angular/forms';
import { IFormController } from './reactive-form.interfaces';
import { Component, Input, OnInit, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IConfirmMeta, ConfirmationMetas, IConfirmationResult } from '@shared/tconfirmation/confirm/confirm.interfaces';
import { RouterControl } from '@pma-services/common/router.control';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements IFormController, OnInit {

  /**
   * Contains confirmation messages
   */
  confirmationMetas: IConfirmMeta[] = ConfirmationMetas.all();

  /**
   * Forms' title, controls, controls'validators etc.
   */
  @Input() config: any;


  /**
   * Form that comminicates with the template.
   */
  @Input() form: FormGroup;


  constructor(private routerControl: RouterControl, private route: ActivatedRoute) { }


  ngOnInit(): void {

    this.route.data.subscribe(result => {
      this.config = result.resolved;
    });


    this.form = new FormGroup({});


    this.config.inputs.forEach(input => {

      const control = new FormControl('', input.validators);

      this.form.addControl(input.name, control);

      this.disableIdField(input.name);
    });


    for (let e of Object.keys(this.config.data)) {
      if (e !== 'meta') {
        this.getControl(e).setValue(this.config.data[e]);
      }
    }


  }

  disableIdField(name: string) {
    if (name.toLowerCase() === 'id') {
      this.getControl(name).disable();
    }
  }

  /**
   * template helpers
   */
  submitLabel() {
    return this.config.meta.submitLabel;
  }
  isFormValid() {
    return this.form.valid && this.form.dirty;
  }
  isDirty() {
    return this.form.dirty;
  }

  bgColor() {
    return this.config.meta.bgColor;
  }
  title() {
    return this.config.meta.title || this.config.meta.name;
  }

  inputs() {
    return this.config.inputs;
  }


  // Form controller Access
  getControl(controlName: string): FormControl {
    return this.form.controls[controlName] as FormControl;
  }

  value(controlName: string) {
    return this.getControl(controlName).value;
  }

  setControlValue(controlName: string, value: string | number) {
    try {
      this.getControl(controlName).setValue(value);
    } catch (err) {
      throw new Error(`Could not find the field with the name ${controlName}`);
    }
  }


  getControlValue(controlname: string) {
    return this.getControl(controlname).value;
  }

  valid(name: string): boolean {

    const c = this.getControl(name);
    return c.valid && (c.touched && c.dirty);
  }

  invalid(name: string): boolean {
    const c = this.getControl(name);
    return c.invalid && (c.touched && c.dirty);
  }


  /**
   * return the validation result of the control
   * @param controlName contol name
   */
  errors(controlName: string): ValidationErrors {
    return this.getControl(controlName).errors;
  }
  // Form Controller Acess







  // confirmation
  confirm(event: IConfirmationResult) {
    if (event.status) {

      switch (event.type) {
        case 'back': this.onBack(event); break;
        case 'reset': this.onReset(event); break;
        case 'cancel': this.onBack(event); break;
        case 'close': this.onBack(event); break;
        case 'save': this.onSubmit(event); break;
        case 'delete': this.onDelete(event); break;
        case 'update': this.onSubmit(event); break;
      }


    }

  }

  // Event handlers
  onSubmit(event: IConfirmationResult) {
    try {

      this.config.events.submit({
        type: 'submit',
        paylaod: this.form.value
      });
      console.log(this.form.value);

    } catch (err) {
      // do nothing
    } finally {

      this.backHome();
    }



  }

  onDelete(event: IConfirmationResult) {
    try {
      this.config.events.submit({
        type: 'delete',
        paylaod: this.form.value
      });
    } catch (err) {
      // do nothing...
    } finally {
      this.backHome();
    }
  }



  onBack(event: IConfirmationResult) {
    try {
      this.config.events.submit({
        type: 'back',
        paylaod: this.form.value
      });
    } catch (err) {
      // do nothing...
    } finally {
      this.backHome();
    }

  }

  onReset(event: IConfirmationResult) {

    try {
      this.config.events.submit({
        type: 'reset',
        paylaod: this.form.value
      });
    } catch (err) {

      // do nothing.

    } finally {
      Object.entries(this.form.controls).forEach(e => {
        this.form.controls[e[0]].reset('', { invalid: null, valid: null, dirty: null, touched: null });
      });
    }
  }

  backHome() {
    this.routerControl.navigateHome();
  }

}

