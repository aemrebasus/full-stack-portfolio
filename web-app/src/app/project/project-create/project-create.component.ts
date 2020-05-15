import { Component, OnInit } from '@angular/core';
import { FormClass } from '@sharedModule/form/FormClass';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../services/project.service';
import { RoutingService } from '../services/routing/routing.service';

@Component({
  selector: 'app-project-create',
  templateUrl: '../../shared/form/form.template.html'
})
export class ProjectCreateComponent extends FormClass implements OnInit {

  constructor(
    public formbuilder: FormBuilder,
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
    this.submitLabel = 'Edit';

    this.currentItemId = 'Auto-Generated-ID';
  }


  ngOnInit(): void {
    this.initCreate();
  }


  goBack(): void {
    this.routingService.projects(this.router);
  }


  onSubmit() {

  }

}
