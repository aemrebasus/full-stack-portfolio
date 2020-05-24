import { FormControl } from '@angular/forms';

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







