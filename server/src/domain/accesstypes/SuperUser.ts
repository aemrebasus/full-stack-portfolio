import { ICanModifySubscription, IssueNumberLimit, UserNumberLimit } from './ican/ICanModifySubscription';
import { ICallback } from './ican/ICallback';
import { ISubscription, SubscriptionModel } from '@domain/entities/ISubscription';

export class SuperUser implements
    ICanModifySubscription {

    limitUserNumber(organizationId: string, limit: UserNumberLimit, callback: ICallback<ISubscription | null>): Promise<ISubscription | null> {
        return SubscriptionModel.updateOne({ organizationId }, { userLimit: limit }).then();
    }
    limitIssueNumber(organizationId: string, limit: IssueNumberLimit, callback: ICallback<ISubscription | null>): Promise<ISubscription | null> {
        return SubscriptionModel.updateOne({ organizationId }, { issueLimit: limit }).then();
    }

}