export type EventHandler<T = any, R = any> = (event?: T) => R;



export type ValidationHandler = (value?: string | string[]) => IValidationResult;

export type SetEventHandlerCallback<T = any, E = any, R = void> = (event: T, thisClass: E) => R;

export type CustomSettingHandler<T = any, E = any, R = void> = (className: T) => R;

export interface IValidationResult {
    status: boolean;
    messages: string[];
}


export interface ISearchResult {
    values: string[];
}

