import { Component, OnInit } from '@angular/core';
import { ValidatorService } from '@services/form/validator.service';
import { FormBuilder } from '@components/form-builder/form-builder.meta';

@Component({
  selector: 'app-issue-form',
  templateUrl: './issue-form.component.html',
  styleUrls: ['./issue-form.component.scss']
})
export class IssueFormComponent {

  route = '/api/v1/issues/create';

  constructor(private validationService: ValidatorService) { }

  form = new FormBuilder({ name: 'Issue Form', color: 'info', route: this.route })
    .addSimpleField('Title', 'text', 'title')
    .addSimpleField('Description', 'text', 'description');
}
