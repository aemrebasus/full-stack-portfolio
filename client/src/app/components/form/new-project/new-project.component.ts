import { Component, Input } from '@angular/core';
import { ValidatorService } from '@services/form/validator.service';
import { FormInputList } from '../input-list/input-list.component';
import { FormInput } from '../input/input.meta';
import { FormBuilder } from '../form-builder/form-builder.meta';


@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss']
})
export class NewProjectComponent {


  constructor(private validator: ValidatorService) { }

  @Input() formName = 'Create Project';
  @Input() color = 'success';

  public inputList = new FormInputList('description', 'Description', 'text');

  public form = new FormBuilder(this.formName, this.color)
    .addFields(
      new FormInput('projectName', 'Project Name', 'text', (value: string) => this.validator.isNameValid(value)),
      new FormInput('title', 'Title', 'text', (value: string) => this.validator.isNameValid(value)),
      new FormInput('assignee', 'Assignee', 'text', (value: string) => this.validator.isNameValid(value))
    );
}
