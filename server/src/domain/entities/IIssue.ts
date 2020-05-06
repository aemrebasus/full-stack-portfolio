import { mongoose, Schema } from '@mongo';
import { IID } from '@domain/entities/IID';
import { IIssueStatus } from '@domain/entities/IIssueStatus';

const String = Schema.Types.String;

export interface IIssue {
    _id?: IID;
    userid?: IID;
    title?: string;
    description?: string;
    status?: IIssueStatus;
    createdOn?: Date;
    organization?: string;
}



const IssueSchema = new Schema({
    userid: { type: String },
    title: { type: String },
    description: { type: String },
    status: { type: String },
    createdOn: { type: String },
    organizationId: { type: String },
})


export const IssueModel = mongoose.model('issues', IssueSchema)