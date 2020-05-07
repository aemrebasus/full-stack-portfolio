import { mongoose, Schema, Document } from '@mongo';
import { IID } from '@domain/entities/IID';
import { IIssueStatus } from '@domain/entities/IIssueStatus';

const String = Schema.Types.String;

export interface IIssue {
    _id?: IID;
    userId?: IID;
    organizationId?: string;
    projectId?: string;
    title?: string;
    description?: string;
    status?: IIssueStatus;
    createdOn?: Date;
}

export class IssueDoc extends Document implements IIssue {
    constructor(
        public _id: string,
        public userId: string,
        public organizationId: string,
        public title: string,
        public status: IIssueStatus,
        public createdOn: Date,
        public description: string,
        public projectId?: string
    ) { super() }
}

const IssueSchema = new Schema({
    userid: { type: String },
    organizationId: { type: String, required: true },
    projectId: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String },
    status: { type: String, default: 'todo' },
    createdOn: { type: Date, default: Date.now() },
})


export const IssueModel = mongoose.model<IssueDoc>('issues', IssueSchema)