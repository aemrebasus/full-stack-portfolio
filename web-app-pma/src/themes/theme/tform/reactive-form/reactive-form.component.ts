import { FormControl, FormGroup, ValidationErrors } from '@angular/forms';
import {
  IFormMeta,
  IAlertUtility,
  IEventHandlers,
  IFormController,
} from './reactive-form.interfaces';

import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent
  implements
  IAlertUtility,
  IEventHandlers,
  IFormController, OnInit {

  /**
   * Forms' title, controls, controls'validators etc.
   */
  @Input() meta: IFormMeta;

  /**
   * Form that comminicates with the template.
   */
  @Input() form: FormGroup;

  @Output() routerEvent = new EventEmitter();

  constructor(private route: ActivatedRoute, private router: Router) { }

  waiting = 1000;

  
  renderSlow() {
    this.waiting += 1000;
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(true);
      }, this.waiting);
    });
  }

  ngOnInit(): void {
    this.route.data.subscribe(resolvedData => {
      this.meta = resolvedData.resolved.meta;
      this.init(this.meta);
    });

  }


  init(meta: IFormMeta) {


    /**
     * Get dat from router and store the meta
     */

    this.meta = meta;

    /**
     * init FormGroup
     */
    this.form = new FormGroup({});


    /**
     * init controllers
     */
    this.meta.inputs.forEach(input => {

      const control = new FormControl('', input.validators);

      // TODO: Init Validators!!!!!

      this.form.addControl(input.name, control);
    });

  }


  // Alerts
  closeAlert() {
    setTimeout(() => {
      this.meta.informationAlert = {};
    }, 3000);
  }

  alertInfo(message: string) {
    this.meta.informationAlert = { message, type: 'info' };
    this.closeAlert();
  }

  alertDanger(message: string) {
    this.meta.informationAlert = { message, type: 'danger' };
    this.closeAlert();
  }

  alertWarning(message: string) {
    this.meta.informationAlert = { message, type: 'warning' };
    this.closeAlert();
  }
  // Alerts



  setIdFieldDisable() {
    try {
      this.form.controls?.id.disable();
    } catch (err) {
      this.alertDanger(err);
    }
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





  // Event handlers
  onSubmit() {
    this.meta.events.onSubmit(this.form.value);
  }

  onDelete() {
    this.meta.events.onDelete(this.form.value);
  }


  goBack() {
    try {
      this.meta.events.goBack(this.form.value);
    } catch (err) {
      throw new Error('goBack method could not be found in the meta object. Please make sure to pass a handler function for goBack.')
    }
  }

  onReset() {
    try {
      this.meta.events.onReset(this.form.value);
    } catch (err) {
      Object.entries(this.form.controls).forEach(e => {
        this.form.controls[e[0]].reset('', { invalid: null, valid: null, dirty: null, touched: null });
      });
    }
  }



  closeOutlet() {
    this.router.navigate(['../pma/home', { outlets: { forms: null } }]);
    console.log('CLicked Close')
  }

}

