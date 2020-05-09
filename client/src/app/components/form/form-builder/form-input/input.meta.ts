export enum ICON {
    user = 'fas fa-user',
    signiture = 'fas fa-signature',
    lock = 'fas fa-lock',
    email = 'fas fa-envelope',
    building = 'fas fa-building',
    address = 'fas fa-map-marker-alt',
    education = 'fas fa-user-graduate',
    date = 'far fa-calendar-alt',
    time = 'far fa-clock',
    diagram = 'fas fa-project-diagram',
    title = 'fas fa-heading',
    description = 'fas fa-list-ol',
    gear = 'fas fa-users-cog',
    selectImage = 'fas fa-image',
    captureImage = 'fas fa-camera'
}


type IEventHandler = (event?) => any;

abstract class ABaseInput<T extends IInputMeta> implements IBaseInput<T> {
    public meta: T;

    public setMeta(meta: T) {
        this.meta = meta;
        if (meta.type === 'editable-list') {
            this.meta.values = [];
        }
        return this;
    }


    public add() {
        if (this.meta.value !== '') {
            this.meta.values.push(this.meta.value);
            this.meta.value = '';
        }
    }

    public delete() {
        this.meta.values.pop();
        this.meta.value = '';
    }

    public keyDown(event) {
        if (this.meta.type === 'editable-list') {
            if (event.key === 'Enter') {
                this.add();
            } else if (event.key === 'Delete') {
                this.delete();
            }
        }
    }
}


export class InputText extends ABaseInput<IInputMeta> { }

export class DataList extends InputText { }

export class CheckOptions extends InputText { }

export class CheckOption extends InputText { }

export class Range extends InputText { }

export class EditableList extends InputText { }

export class SelectOption extends ABaseInput<ISelectMeta> { }

export class SelectDate extends ABaseInput<IDateMeta> { }

export class SearchItem extends ABaseInput<ISearchMeta> { }



export interface IBaseInput<T = IInputMeta> {
    /**
     * Interface defining meta data of the input element.
     */
    meta?: T;
}

export interface ISelect extends IBaseInput<ISelectMeta> { }

export interface IDate extends IBaseInput<IDateMeta> { }

export interface ISearch extends IBaseInput<ISearchMeta> { }




export interface ISelectMeta extends IInputMeta {
    /**
     * Allow user to select multiple options when it is true.
     */
    multiple?: boolean;
}

export interface IDateMeta extends IInputMeta {
    /**
     * Stores the selected date in Date format
     */
    dateValue?: Date;
}

export interface ISearchMeta extends IInputMeta {
    /**
     * List of items that user will search for.
     */
    searchList?: string[];

    /**
     * Founds items upon search.
     */
    founds?: string[];
}


/**
 * Interfaces
 */
export interface IInputMeta {
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
     * Icon that shown to the left of the input element.
     */
    icon?: ICON;

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
    isValid?: string;

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
     * 
     */
    isSubmitted?: boolean;

    /**
     * For buttons
     */
    color?: IColors;

    /**
     * For angular routes
     */
    route?: string;


    /**
     * Events
     */
    onClick?: IEventHandler;

    onInput?: IEventHandler;

    onHover?: IEventHandler;

    onLeave?: IEventHandler;

}


export interface IBaseInputValidation<T, R> {
    validate(value: T): R;
}

export interface IComparisonValidation<R> {
    validatePassword(password0: string, password1: string): R;
}

export interface IValidationResult {
    status: boolean;
    message: string;
}



export type InputTypes = 'text' | 'password' | 'email' | 'textarea'
    | 'select' | 'multiple-select'
    | 'date' | 'datetime' | 'time' | 'week' | 'datetime-local' | 'month'
    | 'color'
    | 'range'
    | 'radio' | 'checkbox'
    | 'input-list'
    | 'file'
    | 'image'
    | 'number'
    | 'url'
    | 'tel'
    | 'editable-list'
    | 'button' | 'submit' | 'cancel' | 'reset';


export type FileType = 'image/*' | 'audio/*' | 'video/*';

export type AutoComplete = 'name' | 'tel' | 'username' | 'email' | 'address';


export type IColors = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'dark' | 'light';

