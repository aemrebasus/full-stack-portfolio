import { ValidatorFn } from '@angular/forms';
import { IElementStyle } from './IStyle';
import { IViewMeta } from './IViewMeta';
import { IEventHandlers } from '@pma-core/state/IEventHandlers';


export interface IFormView<DataType, Payload> {

    meta?: IViewMeta;
    events?: IEventHandlers<Payload>;
    inputs?: IFormControl[];
    data?: DataType[] | any;
}





/**
 * Use this interface to initialize the inputs in the
 */
export interface IFormControl {


    /**
     * programatic name of this input.
     * @important must match the passed FormGroup's controls' name field.
     */
    name?: string;

    /**
     * Like text, range, data, password etc.
     */
    type?: string;

    /**
     * muted text shown under the input box
     */
    helperText?: string;

    /**
     * Place holder for the input
     */
    placeholder?: string;

    /**
     * input label
     */
    label?: string;


    /**
     * If any, the input will use this data list for auto-complation.
     */
    datalist?: string[];

    /**
     * Input value
     */
    value?: string;

    /**
     * angular form validation functions.
     */
    validators?: ValidatorFn[];


    visible?: boolean;


    /**
     * Not recomended !
     */
    style?: IElementStyle;


}


export type FormControlType = 'text' | 'password' | 'date' | 'range';



