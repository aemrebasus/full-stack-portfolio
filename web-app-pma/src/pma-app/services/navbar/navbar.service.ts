import { INavbar } from '@tnavbar/navbar/navbar.component';



export const NavBarData: INavbar | any = [
    {
        path: 'Document', subs: [
            {
                outlet: 'forms', path: 'New Project',
                loadChildren: () => import('@pma-entity-modules/project-entity/project-entity.module').then(m => m.ProjectEntityModule),
            },
            {
                outlet: 'forms', path: 'New Issue',
                loadChildren: () => import('@pma-entity-modules/project-entity/project-entity.module').then(m => m.ProjectEntityModule),
            },
            {
                outlet: 'forms', path: 'Open Project',
                loadChildren: () => import('@pma/open-dialog/open-dialog.module').then(m => m.OpenDialogModule),
            },
            {
                outlet: 'forms', path: 'Open Issue',
                loadChildren: () => import('@pma-entity-modules/project-entity/project-entity.module').then(m => m.ProjectEntityModule),
            },

        ]
    },
    {
        path: 'User', subs: [
            {
                outlet: 'forms', path: 'New User',
                loadChildren: () => import('@pma-entity-modules/project-entity/project-entity.module').then(m => m.ProjectEntityModule),
            },

            {
                outlet: 'forms', path: 'View User',
                loadChildren: () => import('@pma-entity-modules/project-entity/project-entity.module').then(m => m.ProjectEntityModule),
            },
        ]
    },
    {
        path: 'Inbox',
        outlet: 'forms',
        loadChildren: () => import('@pma-entity-modules/project-entity/project-entity.module').then(m => m.ProjectEntityModule),

    },
    {
        path: 'Setting', subs: [
            {
                outlet: 'forms', path: 'Profile',
                loadChildren: () => import('@pma-entity-modules/project-entity/project-entity.module').then(m => m.ProjectEntityModule),
            },
            {},
            {
                outlet: 'forms', path: 'Account',
                loadChildren: () => import('@pma-entity-modules/project-entity/project-entity.module').then(m => m.ProjectEntityModule),
            },
            {
                outlet: 'forms', path: 'Notifications',
                loadChildren: () => import('@pma-entity-modules/project-entity/project-entity.module').then(m => m.ProjectEntityModule),
            },
        ]
    },


];

/**
 * Generate outlets 
 */
export const Outlets = () => {
    const outlets = [];
    NavBarData.forEach(d => {
        // main item 
        if (d.outlet) {
            console.log('Adding ', d);
            outlets.push(d)
        }

        // subs
        if (d.subs) {
            d.subs.forEach(s => {
                if (s.outlet) {
                    outlets.push(s);
                }
            })
        }


    })
    console.log(outlets);
    return outlets;
}

