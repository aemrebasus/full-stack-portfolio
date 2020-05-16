import { FormBuilder, FormControl } from '@angular/forms';
import { ParamMap, ActivatedRoute } from '@angular/router';
import {
  IFormMeta,
  IAlertUtility,
  IEventHandlers,
  IFormController
} from './reactive-form.interfaces';

import { Component, OnInit, Input } from '@angular/core';
import { PreDefinedConfirmationMetas, IConfirmationResult } from '@sharedModule/confirm/confirm.interfaces';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent
  extends PreDefinedConfirmationMetas
  implements
  OnInit,
  IAlertUtility,
  IEventHandlers,
  IFormController {



    
  @Input() meta: IFormMeta;



  constructor(public formbuilder: FormBuilder) {
    super();
  }



  ngOnInit(): void {



  }



  // Alerts
  closeAlert() {
    setTimeout(() => {
      this.meta.informationAlert = {};
    }, 3000);
  }

  alertInfo(msg: string) {
    this.meta.informationAlert = { msg, type: 'info' };
    this.closeAlert();
  }

  alertDanger(msg: string) {
    this.meta.informationAlert = { msg, type: 'danger' };
    this.closeAlert();
  }

  alertWarning(msg: string) {
    this.meta.informationAlert = { msg, type: 'warning' };
    this.closeAlert();
  }
  // Alerts



  setIdFieldDisable() {
    try {
      this.meta.form.controls?._id.disable();
    } catch (err) {
      this.alertDanger(err);
    }
  }



  // Initializer
  initEdit(route: ActivatedRoute) {
    this.setIdFieldDisable();
    this.setControlValuesViaRoute(route);
    this.editConfirmation.message = `Would you like to save changes?`;
  }

  initCreate() {
    this.setIdFieldDisable();
    this.meta.currentItemId = 'Auto-Generated-Id';
    this.editConfirmation.message = `Would you like to save the item?`;
    this.editConfirmation.type = 'save';
    this.setControlValue('_id', this.meta.currentItemId);
  }
  // Initializers



  // Form controller Access
  getControl(controlName: string): FormControl {
    return this.meta.form.controls[controlName] as FormControl;
  }

  setControlValue(controlName: string, value: string | number) {
    try {
      this.getControl(controlName).setValue(value);
    } catch (err) {
      throw new Error(`Could not find the field with the name ${controlName}`);
    }
  }

  setControlValuesViaParamMap(params: ParamMap) {
    this.meta.inputs.forEach(e => {
      this.setControlValue(e.name, params.get(e.name));
    });
  }

  setControlValuesViaRoute(route: ActivatedRoute) {
    route.paramMap.subscribe(params => {
      this.setControlValue('_id', params.get('_id'));
      this.setControlValue('name', params.get('name'));
      this.setControlValue('summary', params.get('summary'));
      this.meta.currentItemId = params.get('_id');
    });
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
  // Form Controller Acess





  // Event handlers
  onSubmit() {
    throw new Error('onSubmit method not implemented yet.');
  }

  onDelete() {
    throw new Error('onSubmit method not implemented yet.');
  }


  goBack() {
    throw new Error('goBack method not implemented yet.');
  }

  onReset() {
    this.alertInfo('Reseting the form.');
    setTimeout(() => {
      this.setControlValue('_id', this.meta.currentItemId);
    }, 1);
  }
  // Event handlers




  // Confirmation Handler
  confirmationHandler(event: IConfirmationResult) {

    if (event.status) {
      switch (event.type) {
        case 'save':
          this.onSubmit();
          this.alertInfo('Saved the item');
          break;
        case 'delete':
          this.onDelete();
          this.alertDanger('Deleted the item!');
          break;
        case 'update':
          this.onSubmit();
          this.alertInfo('Updated the item!');
          break;
        case 'edit':
          this.onSubmit();
          this.alertInfo('Edited the item!');
          break;
        default:
          this.alertWarning('Could not resolve the event type!');
          break;
      }
    } else {
      this.alertInfo(`Canceled the ${event.type} operation.`);
    }

  }
  // Confirmation handler



}

