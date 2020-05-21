import { FormControl, FormGroup, ValidationErrors } from '@angular/forms';
import {
  IFormMeta,
  IAlertUtility,
  IEventHandlers,
  IFormController,
} from './reactive-form.interfaces';

import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoutingService } from '../../zzservices/routing/routting.service';
import { IConfirmMeta, ConfirmationMetas, IConfirmationResult } from '@tconfirmation/confirm/confirm.interfaces';



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

  name = 'form';


  confirmed = false;
  confirmationMetas: IConfirmMeta[] = ConfirmationMetas.all();


  /**
   * Forms' title, controls, controls'validators etc.
   */
  @Input() meta: IFormMeta;

  /**
   * Form that comminicates with the template.
   */
  @Input() form: FormGroup;

  @Output() routerEvent = new EventEmitter();




  constructor(private route: ActivatedRoute, private routingService: RoutingService) { }


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
        default: this.alertInfo(`The event type does not match with any of events! ${event.type}`);
      }




    } else {
      // If Not Confirmed/Canceled
    }

  }

  // Event handlers
  onSubmit(event: IConfirmationResult) {
    try {
      this.meta.events.onSubmit(this.form.value, event);
    } catch (err) {
      alert('Pass the on submit handler with meta.events!!!')
      this.closeOutlet()
    }



  }

  onDelete(event: IConfirmationResult) {
    try {
      this.meta.events.onDelete(this.form.value, event);
    } catch (err) {
      alert('Pass the on submit handler with meta.events!!!')
      this.closeOutlet();
    }
  }



  onBack(event: IConfirmationResult) {
    try {
      // if any handler function provided!
      this.meta.events.onBack(this.form.value, event);
    } catch (err) {
      // else go back to the home page
      alert('Pass the onBack handler with meta.events!!!');
      this.closeOutlet();
    }

  }

  onReset(event: IConfirmationResult) {
    try {
      this.meta.events.onReset(this.form.value, event);
    } catch (err) {
      Object.entries(this.form.controls).forEach(e => {
        this.form.controls[e[0]].reset('', { invalid: null, valid: null, dirty: null, touched: null });
      });
    }
  }

  closeOutlet() {
    this.routingService.closeOutlet();
  }

}

