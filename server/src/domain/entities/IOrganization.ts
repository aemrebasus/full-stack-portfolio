
import { mongoose, Schema, Document } from '@mongo';

const String = Schema.Types.String;

export interface IOrganization {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    company: string;
}


const OrganizationSchema = new Schema({
    firstName: { type: String, required: true, },
    lastName: { type: String, required: true, },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    company: { type: String, required: true, unique: true }
});

class OrganizationDoc extends Document implements IOrganization {
    constructor(
        public firstName: string,
        public lastName: string,
        public email: string,
        public password: string,
        public company: string
    ) { super() }

}

export const OrganizationModel = mongoose.model<OrganizationDoc>('org', OrganizationSchema)