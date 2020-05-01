import { mongoose, Schema } from '@mongo';

const IssueSchema = new Schema({
    userid: { type: String },
    title: { type: String },
    description: { type: String },
    status: { type: String },
    createdOn: { type: String },
    organizationId: { type: String },
})


export const IssueModel = mongoose.model('issues', IssueSchema)