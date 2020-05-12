import { Component } from '@angular/core';
import { ValidatorService } from '@services/form/validator.service';
import { FormBuilder } from '@components/form-builder/form-builder.meta';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.scss']
})
export class ProjectFormComponent {


  route = '/api/v1/projects/create';

  constructor(private validationService: ValidatorService) { }

  form = new FormBuilder({ name: 'User Form', color: 'info', route: this.route })
    .addSimpleField('Project Name');

}
