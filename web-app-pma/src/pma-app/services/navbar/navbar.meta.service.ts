import { INavbar } from '@tnavbar/navbar/navbar.component';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class NavbarMetaService {


    static staticSettings() {
        const navbarSettings: INavbar | any = [
            {
                path: 'Document', subs: [
                    {
                        outlet: 'dialog', path: 'New Project',
                        loadChildren: () => import('@pma/open-form/open-form.module').then(m => m.OpenFormModule),
                    },
                    {
                        outlet: 'dialog', path: 'New Issue',
                        loadChildren: () => import('@pma/open-form/open-form.module').then(m => m.OpenFormModule),
                    },
                    {
                        outlet: 'dialog', path: 'Open Project',
                        loadChildren: () => import('@pma/open-dialog/open-dialog.module').then(m => m.OpenDialogModule),
                    },
                    {
                        outlet: 'dialog', path: 'Open Issue',
                        loadChildren: () => import('@pma/open-dialog/open-dialog.module').then(m => m.OpenDialogModule),
                    },

                ]
            },
            {
                path: 'User', subs: [
                    {
                        outlet: 'dialog', path: 'New User',
                        loadChildren: () => import('@pma/open-form/open-form.module').then(m => m.OpenFormModule),
                    },

                    {
                        outlet: 'dialog', path: 'View User',
                        loadChildren: () => { alert('Not implemented (View User') },
                    },
                ]
            },
            {
                path: 'Inbox',
                outlet: 'dialog',
                loadChildren: () => import('@pma/open-form/open-form.module').then(m => m.OpenFormModule),

            },
            {
                path: 'Setting', subs: [
                    {
                        outlet: 'dialog', path: 'Profile',
                        loadChildren: () => import('@pma/open-form/open-form.module').then(m => m.OpenFormModule),
                    },
                    {},
                    {
                        outlet: 'dialog', path: 'Account',
                        loadChildren: () => import('@pma/open-form/open-form.module').then(m => m.OpenFormModule),
                    },
                    {
                        outlet: 'dialog', path: 'Notifications',
                        loadChildren: () => import('@pma/open-form/open-form.module').then(m => m.OpenFormModule),
                    },
                ]
            },


        ];

        return navbarSettings;
    }


    static staticOutlets() {
        const outlets = [];

        NavbarMetaService.staticSettings().forEach(d => {
            // main item 
            if (d.outlet) {
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


        });
        return outlets;
    }

    settings() {
        return NavbarMetaService.staticSettings();
    }

    outlets() {
        return NavbarMetaService.staticOutlets();
    }


}


