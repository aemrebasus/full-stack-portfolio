import { IID } from '@domain/types/IID';
import { ISubscription } from './ISubscription';

export interface IOrganization {
    _id?: IID;
    name?: string;
    subscription: ISubscription;
}