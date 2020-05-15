import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { FormClass, IInput } from '@sharedModule/form/FormClass';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../services/project.service';
import { RoutingService } from '../services/routing/routing.service';




@Component({
  selector: 'app-project-edit',
  templateUrl: '../../shared/form/form.template.html'
})
export class ProjectEditComponent extends FormClass implements OnInit {

  constructor(
    public formbuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private projectService: ProjectService,
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

    this.submitLabel = 'Edit';


  }


  ngOnInit(): void {
    this.initEdit(this.route);
  }


  goBack(): void {
    this.routingService.projects(this.router, { _id: this.currentItemId });
  }


  onSubmit() {

  }


  onReset() {
    setTimeout(() => {
      this.setControlValue('_id', this.currentItemId);
    }, 1);
  }

}


