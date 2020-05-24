/**
 * State management service must implement this interface!!!
 */
export interface IStateHandler<EventArgument> {
    dispatch(event: EventArgument): void;
}
