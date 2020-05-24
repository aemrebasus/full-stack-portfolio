import { IProject, IEntityMeta } from './IEntities';
import { IConvertable } from './IConverable';
import { IViewFormInput } from './core';

export class Project implements IProject, IConvertable {

    constructor(public meta?: IEntityMeta, public name?: string, public summary?: string) {

    }


    toFormInput(): IViewFormInput {
        return {
            placeholder:'Project'
        }
    }

    toListView(): IListView {
        return {
            id: this.meta.id,
            values: [this.name, this.summary],
            pills: this.meta.tags
        }
    }

    toString(): string {
        return this.name;
    }
}

