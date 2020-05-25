
/**
 * Contains the template's style specifications and title.
 *
 * @name_ ?: string;
 * @bgColor ?: string;
 * @textColor ?: string;
 * @title ?: string;
 * @submitLabel ?: string;
 * @submit : IEventTypes;
 */
export interface IViewMeta<EventType> {

    /**
     * ?
     */
    name?: string;

    /**
     * Background color of the header of the component.
     */
    bgColor?: string;

    /**
     * Text color of the title
     */
    textColor?: string;
    /**
     * Title of the view component
     */
    title?: string;
    /**
     * Label for the submit button 'submit' as default.
     */
    submitLabel?: string;


    /**
     * When user submits a form a dialog, dispatch method will dispatch the event with this name
     * so that StateManager can understand what to do!!!!
     */
    submit: EventType;

}

