import { IEventArgument } from './IEventArgument';

/**
 * State management service must implement this interface!!!
 */
export interface IStateHandler<Payload> {
    dispatch(event: IEventArgument<Payload>): void;
}
