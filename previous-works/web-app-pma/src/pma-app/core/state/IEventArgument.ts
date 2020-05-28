import { IEventTypes } from './IEventTypes';

/**
 * @type_ ?: IEventTypes;
 * @paylaod ?: T;
 */
export interface IEventArgument<Payload> {
    type?: IEventTypes;
    paylaod?: Payload;
}



