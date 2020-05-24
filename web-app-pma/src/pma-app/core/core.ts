import { ValidatorFn } from '@angular/forms';


/**
 * @configuration : IViewConfigurationFields<T>;
 * @toMeta (): IViewMeta;
 * @toInputs (): IViewFormInput[];
 * @toString (): string;
 * @dispatch (event: IViewEventArg): void;
 */
export interface IViewConfiguration<T = any> {

    /**
     * Contains all inforamtion about the rendered component like title, color and content.
     */
    configuration: IViewConfigurationFields<T>;

    /**
     * @return the meta-configuration
     */
    toMeta(): IViewMeta;

    toInputs(): IViewFormInput[];

    /**
     * This method will help me to render list of the data using title or name instead of using all fields!
     * @return the name of title defined in configuration or return the warning text!
     */
    toString(): string;

    /**
     * Runs the event handler based on the event.type's value.
     * @param event Event argumetns like type and data
     */
    dispatch(event: IViewEventArg): void;
}



/**
 * Contains IViewMeta and Data (Entity like issuses, projects, users, etc. )
 * @meta ?: IViewMeta;
 * @events ?: IEventHandlers<T>;
 * @inputs ?: IViewFormInput[];
 * @data ?: T[];
 */
export interface IViewConfigurationFields<T = any> {
    meta?: IViewMeta;
    events?: IEventHandlers<T>;
    inputs?: IViewFormInput[];
    data?: T[];
}
/**
 * Contains the template's style specifications and title.
 *
 * @name_ ?: string;
 * @bgColor ?: string;
 * @textColor ?: string;
 * @title ?: string;
 * @submitLabel ?: string;
 * @submit : IEventTypes;
 */
export interface IViewMeta {

    /**
     * ?
     */
    name?: string;

    /**
     * Background color of the header of the component.
     */
    bgColor?: string;

    /**
     * Text color of the title
     */
    textColor?: string;
    /**
     * Title of the view component
     */
    title?: string;
    /**
     * Label for the submit button 'submit' as default.
     */
    submitLabel?: string;


    /**
     * When user submits a form a dialog, dispatch method will dispatch the event with this name 
     * so that StateManager can understand what to do!!!!
     */
    submit: IEventTypes;

}


/**
 * Use this interface to initialize the inputs in the
 */
export interface IViewFormInput {

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
     * angular form validation functions.
     */
    validators?: ValidatorFn[];



}

export interface IEventHandlers<T = any> {

    /**
     * If multiple view, show the selected item in single view
     */
    view?: IViewEventHandler<T>;

    /**
     * runs when the form submitted.
     */
    submit?: IViewEventHandler<T>;

    edit?: IViewEventHandler<T>;

    assign?: IViewEventHandler<T>;

    /**
     * runs when the form delete button clicked.
     */
    delete?: IViewEventHandler<T>;

    /**
     * When the Back button clicked on the form do this.
     */
    back?: IViewEventHandler<T>;

    close?: IViewEventHandler<T>;

    /**
     * When Reset button clicked
     *  clean the form and restore id back.
     */
    reset?: IViewEventHandler<T>;


    /**
     * Add more events above in need.
     */

}

export type IEventTypes =
    // Generic 
    'create' | 'edit' | 'update' | 'delete'
    | 'close' | 'view'
    | 'submit' | 'reset' | 'back' | 'open'


    // Project Specific
    | 'assign'
    | 'open-project' | 'open-issue' | 'open-user'
    | 'create-project' | 'create-issue' | 'create-user'
    | 'update-project' | 'update-issue' | 'update-user'
    | 'delete-project' | 'delete-issue' | 'delete -user';


/**
 * @type_ ?: IEventTypes;
 * @paylaod ?: T;
 */
export interface IViewEventArg<T = any> {
    type?: IEventTypes;
    paylaod?: T;
}

export type IViewEventHandler<T = any> = (event: IViewEventArg<T>) => void;



/**
 * Implement this interface to the http service or state servcie!
 */
export interface IViewDataService<T> {
    dispatch(event: T);
}

export abstract class ViewConfiguration<T = any> implements IViewConfiguration<T> {

    configuration: IViewConfigurationFields<T>;

    constructor(public stateService?: IViewDataService<IViewEventArg>, ) {
    }

    toInputs(): IViewFormInput[] {
        return this.configuration.inputs;
    }

    toMeta(): IViewMeta {
        return this.configuration.meta;
    }

    toString(): string {
        return this.configuration.meta.name || this.configuration.meta.title || 'Name/title not defined!';
    }

    dispatch(event: IViewEventArg<T>): void {

        try {
            this.configuration.events[event.type](event);
        } catch (err) {
            alert(`event ${event.type} handler not defined!`);
        }

        try {
            this.stateService.dispatch(event);
        } catch (err) {
            alert(`data service not provided or it does not have dispatch method that consumes IViewEventArg`);
        }

    }

}

export interface IListView {
    id?: string | number;
    values?: string[];
    pills?: string[];
}





