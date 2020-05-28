import { AutoComplete, FileType, IColors, InputTypes } from './meta/types';
import { ICON } from './meta/icons';
import {
    EventHandler, ValidationHandler, ISearchResult, CustomSettingHandler
} from './meta/handlers';


abstract class ABaseInput<M extends IInputMeta> implements IBaseInput<M> {

    public meta: M;

    constructor() { }
    /**
     *
     * @param meta Meta data of the Input, contains all data related to input as well as event handlers and validation.
     */
    public setMeta(meta: M, callback?: (meta: M, thisClass: this) => void) {
        this.meta = meta;

        this.meta.errors = [];
        this.meta.founds = [];

        if (this.meta.type === 'editable-list') {
            this.meta.values = [];
        }

        if (callback) {
            callback(meta, this);
        }

        if (!this.meta.id) {
            this.meta.id = `id_${Math.random()}`;
        }

        return this;
    }

    /**
     * Set mouse and keyboard events manualy.
     */
    public setEvents(callback: CustomSettingHandler<BaseInput>) {
        callback(this);
        return this;
    }


    /**
     * It is for editable-list input, user can add multiple items as string and stores them inside the meta.values
     * Add item to the meta.values array.
     */
    public add() {
        if (this.meta.value !== '') {
            this.meta.values.push(this.meta.value);
            this.meta.value = '';
        }
    }
    /**
     * Delete item from the meta.values array.
     */
    public delete() {
        this.meta.values.pop();
        this.meta.value = '';
    }

    /**
     *
     * @param event key event
     * Adds or deletes item from the meta.values array.
     */
    public keyDown(event) {
        if (this.meta.type === 'editable-list') {
            if (event.key === 'Enter') {
                this.add();
            } else if (event.key === 'Delete') {
                this.delete();
            }
        }
    }

    /**
     * Validate the input
     */
    public validate(): boolean {
        this.meta.isValid = true;
        this.meta.errors = [];
        this.meta.isSubmitted = true;
        this.meta.validates.forEach(func => {
            const result = func(this.meta.value);
            if (!result.status) {
                this.meta.isValid = false;
                this.meta.errors.push(...result.messages);
            }
        });

        return this.meta.isValid;
    }

    public reset() {
        this.meta.isValid = true;
        this.meta.errors = [];
        this.meta.isSubmitted = false;
        this.meta.value = '';
        this.meta.values = [];
    }

    /**
     * Convert the input to the object that can be posted to the server.
     */
    public toObject() {
        return JSON.parse(`{"${this.meta.key}":"${this.meta.value}" }`);
    }
}

/**
 * Base input type will be used most of the cases.
 * This class can be used with any interface but make sure extened interface extends the IInputMeta interface.
 */
export class BaseInput<T = IInputMeta> extends ABaseInput<T> {
    constructor(meta?: T) {
        super();

        this.setMeta(meta);
    }

}



export interface IBaseInput<M = IInputMeta> {
    /**
     * Interface defining meta data of the input element.
     */
    meta?: M;

}


/**
 * Default Initializations.
 * If needed, create a default abstract class or a class and pass it to BaseInput' first generic variable.
 */
export abstract class IInputMetaDefault implements IInputMeta {
}

/**
 * Interfaces
 */
export interface IInputMeta {

    /**
     * Respective key in the data entity.
     */
    key?: string;

    /**
     * Unique identifier of each element
     */
    id?: string;

    /**
     * Constant value that comes before the actual value
     */

    preValue?: string;

    /**
     * Stores the input value that is typed by user
     */
    value?: string;

    /**
     * store values as an array
     */
    values?: string[];

    /**
     * Use this variable to store the dateValue instead of value
     */
    dateValue?: Date;


    /**
     * Use this variable to store date values instead of values.
     */
    dateValues?: Date[];


    /**
     * Icon that shown to the left of the input element.
     */
    icon?: ICON;

    /**
     * Stores the color of the icon
     */
    iconColor?: IColors;

    /**
     * Stores the background color of the icon
     */
    iconBgColor?: IColors;

    /**
     * Descriptive name of the element
     */
    name?: string;

    /**
     * Input type like text, email, password etc.
     */
    type?: InputTypes;

    /**
     * Descriptive information about the input value
     */
    label?: string;

    /**
     * Descriptive button label for file dialog button
     */
    buttonLabel?: string;

    /**
     * Descriptive information about the input validity
     */
    helperText?: string;

    /**
     * Text shown inside the input box
     */
    placeHolder?: string;

    /**
     * Descriptive information about the input value shown when user mouse over this element.
     */
    title?: string;

    /**
     * Define this field is required or not for submission
     */
    required?: boolean;

    /**
     * HTML5 feature that help user to fill the forms based on autocomplete data stored in his browser.
     */
    autocomplete?: AutoComplete;
    /**
     * Stores the state of validation of this input
     */
    isValid?: boolean;

    /**
     * Stores the error messages upon validation
     */
    errors?: string[];

    /**
     * List of values that user must type or select for this input.
     */
    options?: string[];

    /**
     * For file input type like image, video, audio etc.
     */
    fileType?: FileType;

    /**
     * For select element multiple option
     */
    multiple?: boolean;

    /**
     * Checks the form is submitted or not
     */
    isSubmitted?: boolean;

    /**
     * For buttons
     */
    color?: IColors;



    /**
     * List of items that user will search for.
     */
    searchList?: string[];

    /**
     * Founds items upon search.
     */
    founds?: ISearchResult | any;

    /**
     * For buttons, not for form!!!!
     */
    route?: string;

    /**
     * Http method
     */
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE';

    events?: { [key: string]: EventHandler }
    /**
     * Events
     */
    searchs?: EventHandler[];
    search?: EventHandler;

    onChanges?: EventHandler[];
    onChange?: EventHandler;

    onClicks?: EventHandler[];
    onClick?: EventHandler;

    onInputs?: EventHandler[];
    onInput?: EventHandler;

    onHovers?: EventHandler[];
    onHover?: EventHandler;

    onLeaves?: EventHandler[];
    onLeave?: EventHandler;

    onKeyDowns?: EventHandler[];
    onKeyDown?: EventHandler;

    validates?: ValidationHandler[];
    validate?: ValidationHandler;

}


