export type EventHandler<T = any, R = any> = (event?: T) => R;



export type ValidationHandler = (value?: string | string[]) => IValidationResult;

export type SetEventHandlerCallback<T = any, E = any, R = void> = (event: T, thisClass: E) => R;

export type CustomSettingHandler<T = any, E = any, R = void> = (className: T) => R;

export interface IValidationResult<T = IValidationResultMeta | IValidationResultsMeta> {
    meta: T;
}

export interface IValidationResultMeta<S = boolean, M = string> {
    status: S;
    message: M;
}

export interface IValidationResultsMeta<M = string> extends IValidationResult {
    messages: M[];
}

export interface ISearchResult<M = ISearchResultMeta> {
    meta: M;
}

export interface ISearchResultMeta {
    value: string;
}
