
import { mongoose, Schema, Document } from '@mongo';
import { IID } from './IID';
import { ObjectId } from 'mongodb';
import { OrganizationModel } from './IOrganization';
import { Error } from 'mongoose';

const String = Schema.Types.String;

export interface IProject {
    _id: IID,
    organizationId: IID,
    name: string
}


const ProjectSchema = new Schema({
    organizationId: { type: ObjectId, required: true, },
    name: { type: String, required: true, unique: true },
});




export class ProjectDoc extends Document implements IProject {
    constructor(
        public _id: string,
        public organizationId: string,
        public name: string
    ) { super() }

}


ProjectSchema.pre<ProjectDoc>('save', function (next) {
    OrganizationModel.findOne({ _id: this.organizationId })
        .then(org => {
            if (org)
                this.name = org.name + '_' + this.name;
            else {
                throw new Error('Could not find the organization');
            }
        })
})

export const ProjectModel = mongoose.model<ProjectDoc>('projects', ProjectSchema);