import { mongoose, Schema } from '@mongo';

const OrganizationSchema = new Schema({
    name: { type: String, required: true, unique: true, index: true },
})

export const OrganizationModel = mongoose.model('oraganizations', OrganizationSchema)