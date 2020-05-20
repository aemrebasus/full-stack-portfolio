import { FormControl, ValidatorFn } from '@angular/forms';

export interface IOperationEvent {
    type: string;
    value?: any;
}

/**
 * Use this interface to initialize the inputs in the
 */
export interface IInput {
    /**
     * Like text, range, data, password etc.
     */
    type?: string;
    /**
     * muted text shown under the input box
     */
    helperText?: string;


    placeholder: string;
    /**
     * input label
     */
    label?: string;
    /**
     * programatic name of this input.
     * @important must match the passed FormGroup's controls' name field.
     */
    name?: string;
    /**
     * like address, email, password, name etc.
     */
    autocomplete?: string;

    /**
     * @NotImplemented useless for now.
     * 
     */
    validators?: ValidatorFn[];



}

export interface IFormData {
    meta?: IFormMeta;
    data?: any;
}


export interface IFormMeta {
    /**
     * Programatic name
     */
    formName?: string;

    /**
     * text that appears on top of the form.
     */
    formTitle?: string;


    formColor?: string;
    /**
     * This is the value of submit button
     */
    submitLabel?: string;


    /**
     * What kind of form it is?
     */
    formType?: string;

    /**
     * Allows us to build connections between form controls and html elements
     * Make sure the name value matches the name of the controller in form!
     * @important make sure the values of inputs matches the FormGroup's.
     */
    inputs?: IInput[];




    /**
     * This stores the current id of the viewed item
     * @For edit forms
     */
    currentItemId?: string | number;


    /**
     * want to send a nice message to user then write your message here and delete it using setTimeout in 3 secs.
     */
    informationAlert?: IAlertMessage;


    /**
     * Create Form will NOT have delete button --> set false
     * Edit Form will HAVE delete button --> set true
     */
    editForm?: boolean;



    events?: IEventHandlers;


}



export interface IAlertMessage {
    /**
     * Type of the alert like primary | secondary | danger | info | success | warning | light | dark
     */
    type?: 'primary' | 'secondary' | 'danger' | 'info' | 'success' | 'warning' | 'light' | 'dark';
    message?: string;
}


export interface IAlertUtility {
    /**
     * Close alert after a few seconds
     */
    closeAlert(): void;
    /**
     * Display alert to user.
     * @param msg alert message
     */
    alertInfo(msg: string): void;
    /**
     * Display alert to user.
     * @param msg alert message
     */
    alertDanger(msg: string): void;
    /**
     * Display alert to user.
     * @param msg alert message
     */
    alertWarning(msg: string): void;
}



export interface IEventHandlers {

    /**
     * runs when the form submitted.
     */
    onSubmit(formValue?: any): void;

    /**
     * runs when the form delete button clicked.
     */
    onDelete(formValue?: any): void;

    /**
     * When the Back button clicked on the form do this.
     */
    goBack(formValue?: any): void;

    /**
     * When Reset button clicked
     *  clean the form and restore id back.
     */
    onReset(formValue?: any): void;
}



export interface IFormController {

    /**
     * @return an access to the named controller
     * @param controlName defined name of the controller in form
     */
    getControl(controlName: string): FormControl;

    /**
     *
     * @param controlName refer to getControl method
     * @param value value attribute of the controller in the form.
     */
    setControlValue(controlName: string, value: string | number): void;


    /**
     *
     * @param controlname name of the control in form and inputs
     */
    getControlValue(controlname: string): string | string[];



    /**
     * @returns true if value of the elemlent valid based on passed Validators.
     * @param name of the control in the FormGroup
     */
    valid(name: string): boolean;



    /**
     * @returns the value of the named control.
     * @param name of the control in the FormGroup
     */
    value(name: string): string;


    /**
     * @returns true if the value of the control is invalid.
     * @param name of control in form and input
     */
    invalid(name: string): boolean;




}


export interface IFormBuilderParam {
    [key: string]: any;
}







