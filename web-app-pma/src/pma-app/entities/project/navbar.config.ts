import { INavbarComponent } from '@shared/tnavbar/navbar/navbar.interface';
import { Router } from '@angular/router';


export function projectNavbarConfig(router: Router): INavbarComponent {


    const onClose = () => {
        return router.navigate(['../']);
    };

    const configuration: INavbarComponent = {
        path: 'project',
        subs: [
            {
                path: 'new project',
                onClick: () => router.navigate([router.url, 'project', 'new project']),
                onClose
            },
            {
                path: 'open project',
                onClick: () => router.navigate([router.url, 'project', 'open project']),
                onClose
            }
        ]
    };

    return configuration;
}






