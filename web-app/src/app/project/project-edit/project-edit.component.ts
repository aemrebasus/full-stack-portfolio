import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { FormClass, IInput } from '@sharedModule/form/FormClass';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../services/project.service';
import { RoutingService } from '../services/routing/routing.service';
import { IConfirmationResult } from '@sharedModule/confirm/confirm.interfaces';




@Component({
  selector: 'app-project-edit',
  templateUrl: '../../shared/form/form.template.html'
})
export class ProjectEditComponent extends FormClass implements OnInit {


  editForm = true;

  formName = 'Edit Project';

  constructor(
    public formbuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private routingService: RoutingService
  ) {

    super(formbuilder);


    this.inputs = [
      { name: '_id', type: 'text', label: 'Project Id', helperText: 'Type the project id', autocomplete: 'id' },
      { name: 'name', type: 'text', label: 'Project Name', helperText: 'Type the project id', autocomplete: 'name' },
      { name: 'summary', type: 'text', label: 'Project Summary', helperText: 'Type the project id', autocomplete: 'summary' },
    ];


    this.form = this.formbuilder.group({
      _id: ['', Validators.required],
      name: ['', Validators.required],
      summary: ['', Validators.required],
    });

    this.submitLabel = 'Save Changes';


  }


  ngOnInit(): void {
    this.initEdit(this.route);
  }


  goBack(): void {
    this.routingService.projects(this.router, { _id: this.currentItemId });
  }


  onSubmit() {
    this.alertInfo('Updating the item!');
  }

  onDelete() {
    this.alertDanger('Deleting the item!')
  }


  onReset() {
    setTimeout(() => {
      this.setControlValue('_id', this.currentItemId);
    }, 1);
    this.alertInfo('Resetting form!');
  }



  confirmationHandler(event: IConfirmationResult) {
    if (event.status) {
      switch (event.type) {
        case 'delete':
          this.onDelete();
          break;
        case 'edit':
          this.onSubmit();
          break;
      }
    } else {
      this.alertInfo(`Canceled the operation of ${event.type}`);
    }
  }
}


