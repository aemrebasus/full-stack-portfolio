import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { FormClass, IInput } from '@sharedModule/form/FormClass';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from 'src/app/services/project/project.service';



@Component({
  selector: 'app-project-edit',
  templateUrl: '../../../shared/form/form.template.html'
})
export class ProjectEditComponent extends FormClass implements OnInit {

  constructor(
    public formbuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private projectService: ProjectService
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

    this.form.controls._id.disable();

    this.submitLabel = 'Edit';

  }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      this.setControlValue('_id', params.get('id'));
      this.setControlValue('name', params.get('name'));
      this.setControlValue('summary', params.get('summary'));
    });

  }


  goBack(): void {
    this.router.navigate(['/projects', { id: this.getControlValue('_id') }], { queryParamsHandling: 'preserve' });
  }


  onSubmit() {
    this.projectService.updateProject(this.form.value).then(data => {

      setTimeout(() => {
        this.goBack();

      }, 1000);
    })
  }


}


