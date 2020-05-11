
import { IColors, IHttpMethod } from './input/meta/types';
import { BaseInput } from './input/input.meta';
import { EventHandler } from './input/meta/handlers';



export class FormBuilder<T = IFormMeta> {
    meta: T;

    public isSubmitted = false;

    public isFormValid = false;

    public inputs: BaseInput[] = [];

    constructor(public title: string = 'Form Title', public color: string = 'danger') { }

    public addField(field: BaseInput) {
        this.inputs.push(field);
    }

    public addFields(...fields: BaseInput[]) {
        this.inputs.push(...fields);
        return this;
    }

    public reset() {
        this.isSubmitted = false;
        this.inputs.forEach(i => {
            i.meta.isSubmitted = false;
            i.meta.isValid = '';
            i.meta.value = '';
        });
        return this;
    }

    public submit() {
        this.isSubmitted = true;
        this.inputs.forEach(i => {
            i.meta.isSubmitted = true;
            i.meta.validates.forEach(v => v(i.meta.value));
        });

        this.isFormValid = this.inputs
            .map(i => !i.meta.isValid)
            .reduce((p, c) => p && c);

        return this;
    }


    public setColor(color: 'primary' | 'info' | 'danger' | 'success') {
        this.color = color;
        return this;
    }

    public setTitle(title: string) {
        this.title = title;
        return this;
    }

    public getFieldById(id: string) {
        return this.inputs.find(e => e.meta.id === id);
    }

    public getValueById(id: string) {
        return this.getFieldById(id).meta.value;
    }

}

abstract class BaseForm<M = IFormMeta> {
    meta: M;
}

export interface IFormMeta {
    name?: string;
    route?: string;
    method: IHttpMethod;
    color?: IColors;
    submit: EventHandler;
}


