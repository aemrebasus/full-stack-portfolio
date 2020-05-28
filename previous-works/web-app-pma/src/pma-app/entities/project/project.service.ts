// import { Router, Routes, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
// import { of, Observable } from 'rxjs';
// import { Injectable } from '@angular/core';
// import { IEventTypes } from '@pma/core/state/IEventTypes';
// import { IProject } from '@pma-entity-modules/IEntities';
// import { IConvertibleProject } from '@pma-entity-modules/ISpecific';
// import { IEventArgument } from '@pma-core/state/IEventArgument';
// import { StateService } from '@pma/state/applicatin.state';
// import { ISelectDialogView, ISelectDialogInput } from '@pma-core/views/ISelectDialogView';
// import { IFormView } from '@pma-core/views/IFormView';
// import { BASE_URL } from '@pma/consts';
// import { INavbarItem } from '@pma-core/views/INavbarItem';

// // ############################################ Project Service  ###########################################################

// @Injectable({
//     providedIn: 'any'
// })
// export class ProjectService implements IConvertibleProject, Resolve<any> {


//     constructor(private stateService: StateService, private router: Router) { }


//     toFormView(data?: IProject[], eventType?: IEventTypes): IFormView<IProject, IProject> {

//         return {
//             meta: {
//                 title: eventType.toUpperCase().replace(/-/g, ' '),
//                 submitLabel: eventType.toUpperCase().split('-')[0],
//                 submit: eventType
//             },
//             events: {
//                 submit: (event: IEventArgument<IProject>) => {
//                     this.dispatch({
//                         type: eventType,
//                         paylaod: event.paylaod
//                     });
//                 }
//             },
//             inputs: [
//                 {
//                     type: 'text', name: 'name', label: 'Name', placeholder: 'project Name',
//                     validators: [(c) => (c.value.length < 2) ? ({ minLength: true }) : null]
//                 },
//                 {
//                     type: 'text', name: 'summary', label: 'Summary', placeholder: 'project Summary',
//                     validators: [(c) => (c.value.length < 3) ? ({ minLength: true }) : null]
//                 },
//             ],
//             data

//         };
//     }

//     toSelectDialogView(data?: ISelectDialogInput[], eventType?: IEventTypes): ISelectDialogView<IProject> {
//         return {
//             meta: {
//                 title: eventType.toUpperCase().replace(/-/g, ' '),
//                 submitLabel: eventType.toUpperCase().split('-')[0],
//                 submit: eventType
//             },
//             events: {
//                 submit: (event: IEventArgument<IProject>) => {
//                     this.stateService.dispatch(event);
//                 }
//             },
//             input: {
//                 type: 'text', name: 'name', label: 'Select project', placeholder: 'Select Project'
//             },
//             data
//         };
//     }

//     dispatch(event: IEventArgument<IProject>): void {
//         this.stateService.dispatch(event);
//     }





//     resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any |
//         Observable<any> | Promise<any> {
//         switch (route.routeConfig.path as IEventTypes) {

//             case 'create-project':
//                 return of(this.toFormView(null, 'create-project'));

//             case 'open-project':
//                 return of(this.toSelectDialogView(
//                     this.stateService.getProjects().map(e => ({ id: e.meta.id, name: e.name })),
//                     'open-project'
//                 ));




//         }
//     }


//     /**
//      * After creating a new navbar item, make sure to create a route inside the @projectRoutes at the end of the file.
//      * And specify which module will deal with it.
//      */
//     toNavbarItem(): INavbarItem {

//         const onClose = () => {
//             return this.router.navigate([BASE_URL]);
//         };

//         return {
//             path: MODULE_NAME,
//             subs: [
//                 {
//                     path: NEW_PROJECT,
//                     onClick: () => this.router.navigate([this.router.url, MODULE_NAME, NEW_PROJECT]),

//                 },
//                 {
//                     path: OPEN_PROJECT,
//                     onClick: () => this.router.navigate([this.router.url, MODULE_NAME, OPEN_PROJECT]),
//                     onClose
//                 }
//             ]
//         };
//     }

// }






