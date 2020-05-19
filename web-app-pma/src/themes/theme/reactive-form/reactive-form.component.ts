import { FormControl, FormGroup, Validators, ValidationErrors } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {
  IFormMeta,
  IAlertUtility,
  IEventHandlers,
  IFormController,
} from './reactive-form.interfaces';

import { Component, OnInit, Input } from '@angular/core';

import { FormValidationService, customValidators } from './services/validation/form-validation.service';
import { PreDefinedConfirmationMetas, IConfirmationResult } from '../confirm/confirm.interfaces';


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



  /**
   * Forms' title, controls, controls'validators etc.
   */
  @Input() meta: IFormMeta;

  /**
   * Form that comminicates with the template.
   */
  @Input() form: FormGroup;



  constructor(private activatedRoute: ActivatedRoute, private validationService: FormValidationService) {
    super();
  }




  ngOnInit(): void {


  }

  initFromRouterResolver() {


    /**
     * Get dat from router and store the meta
     */
    this.activatedRoute.data.subscribe(resolved => {
      this.meta = resolved.data.meta;

      /**
       * init FormGroup
       */
      this.form = new FormGroup({});


      /**
       * init controllers
       */
      this.meta.inputs.forEach(input => {

        const control = new FormControl('');

        // TODO: Init Validators!!!!!

        this.form.addControl(input.name, control);
      });


      /**
       * Inpu the query-params into the form if any .
       */
      this.activatedRoute.queryParamMap.subscribe(queryParams => {
        for (const i of this.meta.inputs) {
          this.setControlValue(i.name, queryParams.get(i.name));
        }
      });



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
      this.form.controls?._id.disable();
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

