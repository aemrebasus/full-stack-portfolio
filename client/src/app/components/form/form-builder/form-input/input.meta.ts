export const icons = {
    user: 'fas fa-user',
    signiture: 'fas fa-signature',
    lock: 'fas fa-lock',
    email: 'fas fa-envelope',
    building: 'fas fa-building',
    address: 'fas fa-map-marker-alt',
    education: 'fas fa-user-graduate',
    date: 'far fa-calendar-alt',
    time: 'far fa-clock',
    diagram: 'fas fa-project-diagram',
    title: 'fas fa-heading',
    description: 'fas fa-list-ol',
    gear: 'fas fa-users-cog'
};


/**
 * Classes
 */

export class FormInput implements IBaseInput {

}

export class FormSelect implements ISelect {

}


export class FormDate implements IDate {

}


/**
 * Interfaces
 */
export interface IBaseInput {
    id?: string;
    isValid?: string;
    value?: string;
    icon?: string;
    name?: string;
    type?: InputTypes;
    label?: string;
    helperText?: string;
    placeHolder?: string;
    title?: string;
    required?: boolean;
    autocomplete?: string;
}

export interface ISelect extends IBaseInput {
    options?: string[];
    selectedOption?: string;
    multiple?: boolean;
}

export interface IDate extends IBaseInput {
    date?: Date;
}

export interface ISearch {
    searchList?: string[];
    founds: string[];
}

export interface ICheck {
    selectedOptions?: string[];
    options?: string[];
}

export interface IRadio {
    selectedOption?: string;
    optins?: string[];
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



export type InputTypes = 'text' | 'password' | 'email' | 'textarea' | 'select' | 'multiple-select' | 'date'
    | 'range' | 'radio-group' | 'check-group' | 'input-list';

