import { IColors, IHttpMethod } from './input/meta/types';
import { BaseInput } from './input/input.meta';
import { EventHandler } from './input/meta/handlers';

export class FormBuilder<DataType = any, T = IFormMeta> {
    public data: DataType;

    public meta: T | IFormMeta = {};

    public isSubmitted = false;

    public isFormValid = false;

    public inputs: BaseInput[] = [];

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

    public reset() {
        this.isSubmitted = false;
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
        return result;
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


