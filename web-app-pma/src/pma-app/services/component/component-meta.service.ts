

import { IDialogMeta } from '@tdialog/dialog/dialog.component';
import { IProject } from '@pma/services/interfaces/IEntities';
import { Injectable } from '@angular/core';
import { IFormData } from '@tform/reactive-form/reactive-form.interfaces';
import { ValidatorService } from '../validator/validator.service';


/** 
 * #### All forms and dialogs are built with these data.
 */



/**
 * Provides Meta data for components.
 */
@Injectable({
  providedIn: 'root'
})
export class ComponentMetaService {

  constructor(private validators: ValidatorService) { }


  /**
   * Project-Create form will be generated from this object.
   * @projectForm
   */
  formCreateProject() {
    const form: IFormData = {
      meta: {
        formTitle: 'Create project',
        formName: 'project',
        submitLabel: 'Save project',
        inputs: [
          {
            type: 'text', name: 'id', label: 'ID', placeholder: 'project ID',
            validators: [
              (c) => (isNaN(c.value) ? ({ NaN: true }) : null)
            ]
          },
          {
            type: 'text', name: 'name', label: 'Name', placeholder: 'project Name',
            validators: [(c) => (c.value.length < 2) ? ({ minLength: true }) : null]
          },
          {
            type: 'text', name: 'summary', label: 'Summary', placeholder: 'project Summary',
            validators: []
          },
        ],
      }
    }

    return form;
  }


  /**
   * Issue-Create form will be generated from this object.
   * @issueForm
   */
  formCreateIssue() {

    const form: IFormData = {
      meta: {
        formTitle: 'Create issue',
        formName: 'issue',
        submitLabel: 'Save issue',
        inputs: [
          {
            type: 'text', name: 'id', label: 'ID', placeholder: 'issue ID',
            validators: [
              (c) => (isNaN(c.value) ? ({ NaN: true }) : null)
            ]
          },
          {
            type: 'text', name: 'title', label: 'Title', placeholder: 'issue title',
            validators: [(c) => (c.value.length < 2) ? ({ minLength: true }) : null]
          },
          {
            type: 'text', name: 'description', label: 'Description', placeholder: 'issue description',
            validators: [this.validators.validators().longText]
          },
        ],
      }
    }

    return form;
  }
  /**
   * Issue-Create form will be generated from this object.
   * @issueForm
   */
  formCreateUser() {

    const form: IFormData = {
      meta: {
        formTitle: 'create user',
        formName: 'user',
        submitLabel: 'save user',
        inputs: [
          {
            type: 'text', name: 'id', label: 'ID', placeholder: 'user ID',
            validators: [
              (c) => (isNaN(c.value) ? ({ NaN: true }) : null)
            ]
          },
          {
            type: 'text', name: 'first name', label: 'first name', placeholder: 'user first name',
            validators: [(c) => (c.value.length < 2) ? ({ minLength: true }) : null]
          },
          {
            type: 'text', name: 'last name', label: 'last name', placeholder: 'user last name',
            validators: [(c) => (c.value.length < 2) ? ({ minLength: true }) : null]
          },
          {
            type: 'text', name: 'description', label: 'Description', placeholder: 'user description',
            validators: [this.validators.validators().longText]
          },
        ],
      }
    }

    return form;
  }


  openProjectDialog(data?: IProject[]) {
    const dialog: IDialogMeta = {
      title: 'Open Project',
      bgColor: 'dark',
      textColor: 'white',
      data,
    }
    return dialog;
  }











}
