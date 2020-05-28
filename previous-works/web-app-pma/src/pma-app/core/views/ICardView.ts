/**
 * header?: ICardHeader;
 * body?: ICardBody;
 * footer?: ICardFooter;
 */
export interface ICardView {

    /**
     * Card header
     */
    header?: ICardHeader;

    /**
     * Card Body
     */
    body?: ICardBody;

    /**
     * Card Footer
     */
    footer?: ICardFooter;

}


export interface ICardHeader {
    title?: string;
    muted?: string;
}

export interface ICardBody {
    img?: string;
    content?: string;
}

export interface ICardFooter {
    content?: string;
    muted?: string;
}


