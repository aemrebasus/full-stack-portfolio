
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ParamMap, ActivatedRoute } from '@angular/router';
import { IConfirmMeta, IConfirmationResult } from '@sharedModule/confirm/confirm.interfaces';

export class FormClass {

  deleteConfirmation: IConfirmMeta = {
    id: 'delete',
    type: 'delete',
    title: 'Confirmation of Deleting',
    cancelLabel: 'Cancel',
    confirmLabel: 'Confirm',
    message: 'Would you like to delete the item?',
  };

  editConfirmation: IConfirmMeta = {
    id: 'edit',
    type: 'edit',
    title: 'Confirmation of Updating',
    cancelLabel: 'Cancel',
    confirmLabel: 'Confirm',
    message: 'Would you like to edit the item?',
  };






  formName = 'Change the formName variable';


  /**
   * Allows us to access all control elements inside the form.
   * Initialize this inside the constructors
   */
  form: FormGroup;

  /**
   * Allows us to build connections between form controls and html elements
   * Make sure the name value matches the name of the controller in form!
   */
  inputs: IInput[];

  /**
   * This is the value of submit button
   */
  submitLabel = 'Set the submitLabel varible!';


  /**
   * id value of any item is immuteable so store the _id here.
   */
  currentItemId: string | number = 'Auto-Generated-ID';

  editForm = false;


  /**
   * want to send a nice message to user then write your message here and delete it using setTimeout in 3 secs. 
   */
  informationAlert: { type?: string, msg?: string } = {
    type: '',
    msg: ''
  };



  constructor(public formbuilder: FormBuilder) { }

  private closeAlert() {
    setTimeout(() => {
      this.informationAlert = {};
    }, 3000)
  }

  alertInfo(msg: string) {
    this.informationAlert = { msg, type: 'info' };
    this.closeAlert();
  }

  alertDanger(msg: string) {
    this.informationAlert = { msg, type: 'danger' };
    this.closeAlert();
  }

  alertWarning(msg: string) {
    this.informationAlert = { msg, type: 'warning' };
    this.closeAlert();
  }



  private setIdFieldDisable() {
    try {
      this.form.controls?._id.disable();
    } catch (err) {
      this.alertDanger(err);
    }
  }
  /**
   * Initialiaze the Edit Component.
   * @param route ActivatedRoute from @angular/router
   */
  public initEdit(route: ActivatedRoute) {
    this.setIdFieldDisable();
    this.setControlValuesViaRoute(route);
    this.editConfirmation.message = `Would you like to save changes?`;
  }
  /**
   * Initialize the Create component!
   */
  public initCreate() {
    this.setIdFieldDisable();
    this.currentItemId = 'Auto-Generated-Id';
    this.editConfirmation.message = `Would you like to save the item?`;
    this.editConfirmation.type = 'save';
    this.setControlValue('_id', this.currentItemId);

  }


  /**
   * @return an access to the named controller
   * @param controlName defined name of the controller in form
   */
  public getControl(controlName: string): FormControl {
    return this.form.controls[controlName] as FormControl;
  }

  /**
   * 
   * @param controlName refer to getControl method
   * @param value value attribute of the controller in the form.
   */
  public setControlValue(controlName: string, value: string | number) {
    try {
      this.getControl(controlName).setValue(value);
    } catch (err) {
      throw new Error(`Could not find the field with the name ${controlName}`);
    }
  }


  /**
   * 
   * @param params this is the parametters of ActivatedRouter' paramMap return type  in Angular 
   * @alternative setControlValuesViaRoute recommended
   */
  public setControlValuesViaParamMap(params: ParamMap) {
    this.inputs.forEach(e => {
      this.setControlValue(e.name, params.get(e.name));
    });
  }

  /**
   * 
   * @param route Angular routing ActivatedRoute
   */
  public setControlValuesViaRoute(route: ActivatedRoute) {
    route.paramMap.subscribe(params => {
      this.setControlValue('_id', params.get('_id'));
      this.setControlValue('name', params.get('name'));
      this.setControlValue('summary', params.get('summary'));
      this.currentItemId = params.get('_id');
    });
  }

  /**
   * 
   * @param controlname name of the control in form and inputs
   */
  public getControlValue(controlname: string) {
    return this.getControl(controlname).value;
  }

  /**
   * @returns true if value of the elemlent valid based on passed Validators.
   * @param name of control in form and input
   */
  public valid(name: string): boolean {
    const c = this.getControl(name);
    return c.valid && (c.touched && c.dirty);
  }


  /**
   * @returns true if the value of the control is invalid.
   * @param name of control in form and input
   */
  public invalid(name: string): boolean {
    const c = this.getControl(name);
    return c.invalid && (c.touched && c.dirty);
  }


  /**
   * runs when the form submitted.
   */
  public onSubmit() {
    throw new Error('onSubmit method not implemented yet.');
  }
  /**
   * runs when the form delete button clicked.
   */
  public onDelete() {
    throw new Error('onSubmit method not implemented yet.');
  }


  /**
   * When the Back button clicked on the form do this.
   */
  public goBack() {
    throw new Error('goBack method not implemented yet.');
  }

  /**
   * When Reset button clicked
   *  clean the form and restore id back.
   */
  public onReset() {
    setTimeout(() => {
      this.setControlValue('_id', this.currentItemId);
    }, 1);
  }

  confirmationHandler(event: IConfirmationResult) {
    throw new Error('implement confirmationHandler now');
  }

}

/**
 * Use this interface to initialize the inputs in the
 */
export interface IInput {
  type?: string;
  helperText?: string;
  label?: string;
  name?: string;
  autocomplete?: string;
}


