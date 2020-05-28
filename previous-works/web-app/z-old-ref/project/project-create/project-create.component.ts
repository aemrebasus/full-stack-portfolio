import { Component, OnInit } from '@angular/core';
import { FormClass } from '@sharedModule/form/FormClass';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../services/project.service';
import { RoutingService } from '../services/routing/routing.service';
import { IConfirmationResult } from '@sharedModule/confirm/confirm.interfaces';

@Component({
  selector: 'app-project-create',
  template: '../../shared/form/form.template.html'
})
export class ProjectCreateComponent extends FormClass implements OnInit {


  submitLabel = 'Save';

  formName = 'Create Project';

  currentItemId = 'Auto-Generated-ID';

  inputs = [
    { name: '_id', type: 'text', label: 'Project Id', helperText: 'Type the project id', autocomplete: 'id' },
    { name: 'name', type: 'text', label: 'Project Name', helperText: 'Type the project id', autocomplete: 'name' },
    { name: 'summary', type: 'text', label: 'Project Summary', helperText: 'Type the project id', autocomplete: 'summary' },
  ];


  form = this.formbuilder.group({
    _id: ['', Validators.required],
    name: ['', Validators.required],
    summary: ['', Validators.required],
  });


  constructor(
    public formbuilder: FormBuilder,
    private router: Router,
    private routingService: RoutingService
  ) {
    super(formbuilder);
  }

  ngOnInit(): void {
    this.initCreate();
  }

  goBack(): void {
    this.routingService.projects(this.router);
    this.alertDanger('Going back to the home page.');
  }

  onSubmit() {
    this.alertInfo('Saving the project.');
  }

  confirmationHandler(event: IConfirmationResult) {
    if (event.status) {

      switch (event.type) {
        case 'save':
          this.onSubmit();
          break;
        default:
          this.alertDanger('Unexpected behaviour observed!');
      }
    } else {
      this.alertInfo('Canceled the creation of an item.');
    }

  }





}


