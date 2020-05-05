import { Component, OnInit, Input } from '@angular/core';
import { FormInput } from '../input/input.meta';
import { ValidatorService } from '@services/form/validator.service';
import { FormInputList } from '../input-list/input-list.component';
import { FormBuilder } from '../form-builder/form-builder.meta';

@Component({
  selector: 'app-new-sprint',
  templateUrl: './new-sprint.component.html',
  styleUrls: ['./new-sprint.component.scss']
})
export class NewSprintComponent {

  constructor(private validator: ValidatorService) { }

  @Input() formName = 'Create Sprint';
  @Input() color = 'warning';

  public inputList = new FormInputList('description', 'Description', 'text');

  public form = new FormBuilder(this.formName, this.color)
    .addFields(
      new FormInput('sprintName', 'Sprint Name', 'text', (value: string) => this.validator.isNameValid(value))
    );
}
