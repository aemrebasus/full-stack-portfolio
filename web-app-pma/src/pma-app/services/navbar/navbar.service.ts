import { INavbar } from '@tnavbar/navbar/navbar.component';



export const NavBarData: INavbar | any = [
    {
        path: 'Document', subs: [
            {
                outlet: 'dialog', path: 'New Project',
                loadChildren: () => import('@pma-entity-modules/project-entity/project-entity.module').then(m => m.ProjectEntityModule),
            },
            {
                outlet: 'dialog', path: 'New Issue',
                loadChildren: () => import('@pma-entity-modules/project-entity/project-entity.module').then(m => m.ProjectEntityModule),
            },
            {
                outlet: 'dialog', path: 'Open Project',
                loadChildren: () => import('@pma/open-dialog/open-dialog.module').then(m => m.OpenDialogModule),
            },
            {
                outlet: 'dialog', path: 'Open Issue',
                loadChildren: () => import('@pma-entity-modules/project-entity/project-entity.module').then(m => m.ProjectEntityModule),
            },

        ]
    },
    {
        path: 'User', subs: [
            {
                outlet: 'dialog', path: 'New User',
                loadChildren: () => import('@pma-entity-modules/project-entity/project-entity.module').then(m => m.ProjectEntityModule),
            },

            {
                outlet: 'dialog', path: 'View User',
                loadChildren: () => import('@pma-entity-modules/project-entity/project-entity.module').then(m => m.ProjectEntityModule),
            },
        ]
    },
    {
        path: 'Inbox',
        outlet: 'dialog',
        loadChildren: () => import('@pma-entity-modules/project-entity/project-entity.module').then(m => m.ProjectEntityModule),

    },
    {
        path: 'Setting', subs: [
            {
                outlet: 'dialog', path: 'Profile',
                loadChildren: () => import('@pma-entity-modules/project-entity/project-entity.module').then(m => m.ProjectEntityModule),
            },
            {},
            {
                outlet: 'dialog', path: 'Account',
                loadChildren: () => import('@pma-entity-modules/project-entity/project-entity.module').then(m => m.ProjectEntityModule),
            },
            {
                outlet: 'dialog', path: 'Notifications',
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

