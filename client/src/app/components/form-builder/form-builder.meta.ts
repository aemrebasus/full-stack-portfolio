import { IColors, IHttpMethod } from './input/meta/types';
import { BaseInput } from './input/input.meta';
import { EventHandler } from './input/meta/handlers';
import { ValidatorService } from '@services/form/validator.service';

export class FormBuilder<DataType = any, T = IFormMeta> {

    public data: DataType;

    public meta: T | IFormMeta = {};

    public error: string;

    public isSubmitted = false;

    public isFormValid = false;

    public inputs: BaseInput[] = [];

    public validationService: ValidatorService = new ValidatorService();

    constructor(meta?: IFormMeta) {

        this.meta = meta;
    }

    public addField(field: BaseInput) {
        this.inputs.push(field);
        return this;
    }

    public addFields(...fields: BaseInput[]) {
        this.inputs.push(...fields);
        return this;
    }

    public addFirstNameField() {
        const emailField: BaseInput = new BaseInput({
            type: 'text',
            label: 'First Name',
            autocomplete: 'name',
            validates: [
                (value: string) => this.validationService.isNameValid(value)
            ]
        });

        this.inputs.push(emailField);
        return this;
    }



    public addLastNameField() {
        const lastName: BaseInput = new BaseInput({
            type: 'text',
            label: 'Last Name',
            autocomplete: 'lastName',
            validates: [
                (value: string) => this.validationService.isNameValid(value)
            ]
        });

        this.inputs.push(lastName);
        return this;
    }

    public addOrganizationNameField() {
        const lastName: BaseInput = new BaseInput({
            type: 'text',
            label: 'Organization Name',
            autocomplete: 'organization',
            validates: [
                (value: string) => this.validationService.isNameValid(value)
            ]
        });

        this.inputs.push(lastName);
        return this;
    }

    public addPasswordField() {
        const lastName: BaseInput = new BaseInput({
            id: 'password',
            type: 'password',
            label: 'Password',
            autocomplete: 'password',
            validates: [
                (value: string) => {
                    const result = this.validationService.isPasswordValid(value);

                    return result;
                }
            ]
        });

        this.inputs.push(lastName);
        return this;
    }

    public addSecondPasswordField() {
        const lastName: BaseInput = new BaseInput({
            id: 'passwordAgain',
            type: 'password',
            label: 'Password',
            autocomplete: 'password',
            validates: [
                (value: string) => this.validationService.isPasswordValid(value),
                (value: string) => {
                    try {


                        const status = this.getFieldById('password').meta.value === value;
                        const messages = ['Password does not match'];
                        if (status) {
                            messages.pop();
                        }
                        return {
                            status,
                            messages
                        }
                    } catch (err) {
                        return {
                            status: false,
                            messages: ['Could not find the other field']
                        };
                    }
                }
            ]
        });


        this.inputs.push(lastName);

        return this;
    }


    public addEmailField() {
        const emailField: BaseInput = new BaseInput({
            type: 'email',
            label: 'Email',
            autocomplete: 'email',
            validates: [
                (value: string) => this.validationService.isEmailValid(value)
            ]
        });

        this.inputs.push(emailField);
        return this;
    }


    public addSelectRoleField() {
        const field: BaseInput = new BaseInput({
            type: 'select',
            label: 'User Role',
            options: ['Select User Role', 'admin', 'developer', 'scrummaster'],
            validates: [
                (value: string) => {
                    let status = false;
                    const messages = [];
                    if (value[0] === 'Select User Role' || !value) {
                        messages.push('Role is required');
                        status = false;
                    } else {

                    }
                    return {
                        status,
                        messages
                    }
                }
            ]
        });

        this.inputs.push(field);
        return this;
    }

    public reset() {
        this.isSubmitted = false;
        this.error = '';
        this.inputs.forEach(i => {
            i.reset();
        });
        return this;
    }

    public validate() {
        let isValidForm = true;
        this.inputs.forEach(i => {
            if (!i.validate()) {
                isValidForm = false;
            }
        });
        return isValidForm;
    }


    public submit() {
        this.isSubmitted = true;
        const result = this.validate();
        this.isFormValid = result;
        return this.isFormValid;
    }


    public getFieldById(id: string) {
        return this.inputs.find(e => e.meta.id === id);
    }

    public getValueById(id: string) {
        return this.getFieldById(id).meta.value;
    }


    public toObject() {
        let obj = {};

        this.inputs.forEach(i => {
            obj = { obj, ...i.toObject() }
        });
        return obj;
    }

}

abstract class BaseForm<M = IFormMeta> {
    meta: M;
}

export interface IFormMeta {
    name?: string;
    route?: string;
    method?: IHttpMethod;
    color?: IColors;
    submit?: EventHandler;
}

