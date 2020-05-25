import { ValidatorFn } from '@angular/forms';
import { IElementStyle } from './IStyle';
import { IViewMeta } from './IViewMeta';
import { IEventHandlers } from '../state/IEventHandlers';


export interface IFormView<EventTypes, Payload, DataType, Meta,
    Handlers = IEventHandlers<EventTypes, Payload>,
    Inputs = IFormControl> {

    meta?: Meta;
    events?: Handlers;
    inputs?: Inputs[];
    data?: DataType[] | any;
}





/**
 * Use this interface to initialize the inputs in the
 */
export interface IFormControl<Style = IElementStyle, V = ValidatorFn> {


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
    validators?: V[];

    /**
     * Not recomended !
     */
    style?: Style;


}


export type FormControlType = 'text' | 'password' | 'date' | 'range';



