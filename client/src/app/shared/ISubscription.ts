import { IID } from './IID';

export interface ISubscription {
    _id?: IID;
    organizationId?: IID;
    start?: Date;
    end?: Date;
    issueLimit?: number;
    userLimit?: number;

}
