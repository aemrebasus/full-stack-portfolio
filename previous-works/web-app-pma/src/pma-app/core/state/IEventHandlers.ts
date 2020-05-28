import { IEventArgument } from './IEventArgument';
import { } from './IEventTypes';

export interface IEventHandlers<Payload> {

    /**
     * If multiple view, show the selected item in single view
     */
    view?: IEventHandler<Payload>;

    /**
     * runs when the form submitted.
     */
    submit?: IEventHandler<Payload>;

    edit?: IEventHandler<Payload>;

    assign?: IEventHandler<Payload>;

    /**
     * runs when the form delete button clicked.
     */
    delete?: IEventHandler<Payload>;

    /**
     * When the Back button clicked on the form do this.
     */
    back?: IEventHandler<Payload>;

    close?: IEventHandler<Payload>;

    /**
     * When Reset button clicked
     *  clean the form and restore id back.
     */
    reset?: IEventHandler<Payload>;


    /**
     * Add more events above in need.
     */

}




export type IEventHandler<Payload> = (event: IEventArgument<Payload>) => void;




