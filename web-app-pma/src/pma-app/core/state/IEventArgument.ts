
/**
 * @type_ ?: IEventTypes;
 * @paylaod ?: T;
 */
export interface IEventArgument<EventTypes = any, Payload = any> {
    type?: EventTypes;
    paylaod?: Payload;
}



