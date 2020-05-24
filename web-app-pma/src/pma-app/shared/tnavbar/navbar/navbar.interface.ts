
/**
 * @path ?: string;
 * @subs ?: INavbarItem[];
 * @outlet ?: string;
 * @component ?: any;
 * @loadChildren ?: any;
 */
export interface INavbarComponent {
    path?: string;
    subs?: INavbarComponent[];
    outlet?: string;
    component?: any;
    loadChildren?: any;
    onClick?: any;
    onClose?: any;
}

export type INavbarComponents = INavbarComponent[];

