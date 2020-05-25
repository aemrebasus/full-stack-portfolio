/**
 * @path ?: string;
 * @subs ?: INavbarItem[];
 * @outlet ?: string;
 * @component ?: any;
 * @loadChildren ?: any;
 */
export interface INavbarItem {
    path?: string;
    subs?: INavbarItem[];
    outlet?: string;
    component?: any;
    loadChildren?: any;
    onClick?: any;
    onClose?: any;
}