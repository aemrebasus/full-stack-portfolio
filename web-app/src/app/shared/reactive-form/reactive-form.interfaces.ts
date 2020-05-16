import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';

export interface IOperationEvent {
    type: string;
    value?: any;
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




export interface IFormMeta {
    /**
     * Programatic name
     */
    formName?: 'formName';

    /**
     * text that appears on top of the form.
     */
    formTitle?: 'Change the title of the form';


    /**
     * This is the value of submit button
     */
    submitLabel?: 'Set the submitLabel varible!';


    /**
     * What kind of form it is?
     */
    formType: 'edit' | 'create';

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
     * This stores the current id of the viewed item
     */
    currentItemId: string | number;




    /**
     * want to send a nice message to user then write your message here and delete it using setTimeout in 3 secs.
     */
    informationAlert: IAlertMessage;


    /**
     * Create Form will NOT have delete button --> set false
     * Edit Form will HAVE delete button --> set true
     */
    editForm: boolean;


}


export interface IAlertMessage {
    /**
     * Type of the alert like primary | secondary | danger | info | success | warning | light | dark
     */
    type?: 'primary' | 'secondary' | 'danger' | 'info' | 'success' | 'warning' | 'light' | 'dark';
    msg?: string;
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
    onSubmit(): void;

    /**
     * runs when the form delete button clicked.
     */
    onDelete(): void;

    /**
     * When the Back button clicked on the form do this.
     */
    goBack(): void;

    /**
     * When Reset button clicked
     *  clean the form and restore id back.
     */
    onReset(): void;
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
     * @param params this is the parametters of ActivatedRouter' paramMap return type  in Angular
     * @alternative setControlValuesViaRoute recommended
     */
    setControlValuesViaParamMap(params: ParamMap): void;



    /**
     *
     * @param route Angular routing ActivatedRoute
     */
    setControlValuesViaRoute(route: ActivatedRoute): void;






    /**
     *
     * @param controlname name of the control in form and inputs
     */
    getControlValue(controlname: string): string | string[];





    /**
     * @returns true if value of the elemlent valid based on passed Validators.
     * @param name of control in form and input
     */
    valid(name: string): boolean;






    /**
     * @returns true if the value of the control is invalid.
     * @param name of control in form and input
     */
    invalid(name: string): boolean;




}








