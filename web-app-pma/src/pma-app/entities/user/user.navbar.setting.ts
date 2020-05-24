export const userNavbarSetting = [
    {
        outlet: 'dialog', path: 'New User',
        loadChildren: () => import('@shared/tform/tform.module').then(m => m.TformModule)
    },
    {
        outlet: 'dialog', path: 'View User',
        loadChildren: () => import('@shared/tdialog/tdialog.module').then(m => m.TdialogModule)
    },
];

