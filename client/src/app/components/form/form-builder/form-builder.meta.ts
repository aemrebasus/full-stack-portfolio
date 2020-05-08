import { FormInput } from './form-input/input.meta';


export class FormBuilder {

    public isSubmitted = false;

    public isFormValid = false;

    public inputs: FormInput[] = [];

    constructor(public title: string = 'Form Title', public color: string = 'danger') { }

    public addField(field: FormInput) {
        this.inputs.push(field);
    }

    public addFields(...fields: FormInput[]) {
        this.inputs.push(...fields);
        return this;
    }

    public reset() {
        this.isSubmitted = false;
        this.inputs.forEach(i => {
            i.isSubmitted = false;
            i.isValid = '';
            i.value = '';
        });
        return this;
    }

    public submit() {
        this.isSubmitted = true;
        this.inputs.forEach(i => {
            i.isSubmitted = true;
            i.validate();
        });

        this.isFormValid = this.inputs
            .map(i => !i.isValid)
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
        return this.inputs.find(e => e.id === id);
    }

    public getValueById(id: string) {
        return this.getFieldById(id).value;
    }

}



