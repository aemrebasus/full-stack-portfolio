
import { mongoose, Schema, Document } from '@mongo';
import { IID } from './IID';

const String = Schema.Types.String;

export interface IOrganization {
    _id: IID,
    name: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    company: string;
}


const OrganizationSchema = new Schema({
    name: { type: String, required: true },
    firstName: { type: String, required: true, },
    lastName: { type: String, required: true, },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    company: { type: String, required: true, unique: true }
});

class OrganizationDoc extends Document implements IOrganization {
    constructor(
        public name: string,
        public firstName: string,
        public lastName: string,
        public email: string,
        public password: string,
        public company: string
    ) { super() }

}

export const OrganizationModel = mongoose.model<OrganizationDoc>('org', OrganizationSchema)