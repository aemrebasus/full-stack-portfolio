export interface IError {
    name: string;
    message: string;
}

export class Error implements IError {
    public name = 'Error';
    constructor(public message: string) { }
}