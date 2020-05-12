export class Modal {
    constructor(
        public id: string = 'ID',
        public title: string = 'Title',
        public message: string = 'message',
        public color: TColor = 'primary'
    ) { }
}
export interface IModal {
    id: string;
    title: string;
    message: string;
    color: TColor;
}

type TColor = 'danger' | 'primary' | 'warning' | 'info';

