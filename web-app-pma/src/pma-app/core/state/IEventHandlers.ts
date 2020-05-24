import { IEventArgument } from './IEventArgument';

export interface IEventHandlers<EventTypes, Payload> {

    /**
     * If multiple view, show the selected item in single view
     */
    view?: IEventHandler<EventTypes, Payload>;

    /**
     * runs when the form submitted.
     */
    submit?: IEventHandler<EventTypes, Payload>;

    edit?: IEventHandler<EventTypes, Payload>;

    assign?: IEventHandler<EventTypes, Payload>;

    /**
     * runs when the form delete button clicked.
     */
    delete?: IEventHandler<EventTypes, Payload>;

    /**
     * When the Back button clicked on the form do this.
     */
    back?: IEventHandler<EventTypes, Payload>;

    close?: IEventHandler<EventTypes, Payload>;

    /**
     * When Reset button clicked
     *  clean the form and restore id back.
     */
    reset?: IEventHandler<EventTypes, Payload>;


    /**
     * Add more events above in need.
     */

}




export type IEventHandler<EventTypes, Payload> = (event: IEventArgument<EventTypes, Payload>) => void;




