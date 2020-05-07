import { mongoose, Schema, Document } from '@mongo';
import { IID } from './IID';


const String = Schema.Types.String;

export interface ISubscription {
    _id?: IID;
    organizationId?: IID;
    start?: Date;
    end?: Date;
    issueLimit?: number;
    userLimit?: number;

}

export class SubscriptionDoc extends Document implements ISubscription {
    constructor(
        public _id: IID,
        public organizationId: IID,
        public start: Date,
        public end: Date,
        public issueLimit: number,
        public userLimit: number,
    ) {
        super()
    }
}

const SubscriptionSchema = new Schema({
    organizationId: { type: String, required: true },
    start: { type: Date, required: true },
    end: { type: Date, required: true },
    issueLimit: { type: Number, required: true, default: 10 },
    userLimit: { type: Number, required: true, default: 10 }
})


export const SubscriptionModel = mongoose.model<SubscriptionDoc>('subs', SubscriptionSchema)