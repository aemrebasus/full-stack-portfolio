import { mongoose, Schema } from '@mongo';
const String = Schema.Types.String;
export interface ISubscription {
    start?: string,
    end?: string,
    type?: string,
}


const SubscriptionSchema = new Schema({
    start: { type: Date, required: true },
    end: { type: Date, required: true },
    type: { type: String, required: true },
    organizationId: { type: String, required: true }
})


export const SubscriptionModel = mongoose.model('subscriptions', SubscriptionSchema)