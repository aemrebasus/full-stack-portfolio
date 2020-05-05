const icons = {
    firstName: 'fas fa-user',
    lastName: 'fas fa-signature',
    password: 'fas fa-lock',
    passwordAgain: 'fas fa-lock',
    email: 'fas fa-envelope',
    companyName: 'fas fa-building',
    address: 'fas fa-map-marker-alt',
    education: 'fas fa-user-graduate',
    university: 'fas fa-user-graduate',
    date: 'far fa-calendar-alt',
    time: 'far fa-clock',
    projectName: 'fas fa-project-diagram',
    title: 'fas fa-heading',
    description: 'fas fa-list-ol',
    assignee: 'fa fa-user'
};


export class FormInput implements IFormInput {

    public isValid = '';
    public value = '';
    public required = false;
    public isSubmitted = false;
    public label: string;
    public helperText: string;
    public placeHolder: string;
    public autocomplete: string;
    public icon = 'fas fa-signature';


    constructor(
        public id: string,
        public name: string,
        public type: IInputType,
        public validation?: ValidationFunction,
    ) {

        this.label = this.name.toUpperCase();
        this.helperText = `Type your ${this.name}`;
        this.placeHolder = this.name.toUpperCase();
        this.autocomplete = this.type;
        this.icon = icons[this.id];

    }

    public validate() {
        this.isValid = this.validation(this.value);
    }

}

export interface IFormInput {
    id: string;
    name: string;
    type: IInputType;
    label: string;
    helperText: string;
    placeHolder: string;
    required: boolean;
    autocomplete: string;
    isSubmitted: boolean;
    isValid: string;
    value: string;
    icon: string;
}




type IInputType = 'text' | 'password' | 'email' | 'checkbox' | 'textarea';

type ValidationFunction = (value: string) => string;

