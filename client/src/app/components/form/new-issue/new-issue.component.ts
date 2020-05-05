import { Component, OnInit, Input } from '@angular/core';
import { ValidatorService } from '@services/form/validator.service';
import { FormBuilder } from '../form-builder/form-builder.meta';
import { FormInput } from '../input/input.meta';
import { FormInputList } from '../input-list/input-list.component';

@Component({
  selector: 'app-new-issue',
  templateUrl: './new-issue.component.html',
  styleUrls: ['./new-issue.component.scss']
})
export class NewIssueComponent {

  constructor(private validator: ValidatorService) { }

  @Input() formName = 'New Issue';
  @Input() color = 'dark';

  public inputList = new FormInputList('description', 'Description', 'text');

  public form = new FormBuilder(this.formName, this.color)
    .addFields(
      new FormInput('title', 'Title', 'text', (value: string) => this.validator.isNameValid(value)),
      new FormInput('assignee', 'Assignee', 'text', (value: string) => this.validator.isNameValid(value)),
      new FormInput('sprintName', 'Sprint Name', 'text', (value: string) => this.validator.isNameValid(value))
    );
}
