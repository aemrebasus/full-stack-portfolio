import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'issue', children: [

            {
                path: 'new issue',
                loadChildren: () => import('@shared/tform/tform.module').then(m => m.TformModule),
                resolve: { resolved: null }
            },
            {
                path: 'open issue',
                loadChildren: () => import('@shared/tdialog/tdialog.module').then(m => m.TdialogModule),
                resolve: { resolved: null }
            }
        ]
    }
];
