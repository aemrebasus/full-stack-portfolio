import { mongoose, Schema } from '@mongo';
import { PreUserSchema, UserInterface } from '@entities';

export const PreOrganizationSchema = {
    name: { type: String, default: 'Unknown' },
    location: { type: String, default: 'Unknown' },
    businessType: { type: String, default: 'Unknown' },
    createdOn: { type: Date, default: Date.now },
    admin: [PreUserSchema]
}

export interface OrganizationInterface {
    name: string;
    location: string;
    businessType: string;
    createdOn: Date;
    admin: UserInterface;
}


export const OrganizationSchema = new Schema(PreOrganizationSchema)



export const OrganizationModel = mongoose.model('organizations', OrganizationSchema)


