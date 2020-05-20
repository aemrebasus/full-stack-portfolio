import { INavbar } from '@tnavbar/navbar/navbar.component';

export const NavBarData: INavbar | any = [
    {
        path: 'Document', subs: [
            {
                outlet: 'right-area', path: 'New Project',
                loadChildren: () => import('@pma-entity-modules/project-entity/project-entity.module').then(m => m.ProjectEntityModule),
            }
        ]
    }
];

/**
 * Generate outlets 
 */
export const Outlets = NavBarData.map(d => { try { return d.subs } catch (err) { } })[0];


