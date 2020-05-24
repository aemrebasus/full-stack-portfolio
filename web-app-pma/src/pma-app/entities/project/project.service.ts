import { Injectable } from '@angular/core';
import { IConvertibleForm } from '@pma/core/elements/IConvertibles';
import { AbstractEntityService, AbstractEntity } from '@pma/core/core';
import { IProject } from '@pma-entity-modules/IEntities';

@Injectable({
    providedIn: 'any'
})
export class ProjectService extends AbstractEntityService {

}


export class Project extends AbstractEntity implements IProject {

}