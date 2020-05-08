import { Component, Input } from '@angular/core';
import { ValidatorService } from '@services/form/validator.service';
import { FormInputList } from '../input-list/input-list.component';
import { FormInput } from '../input/input.meta';
import { FormBuilder } from '../form-builder/form-builder.meta';
import { IProject } from '@app/shared/IProject';
import { HttpService } from '@services/http/http.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss']
})
export class NewProjectComponent {


  constructor(private validator: ValidatorService, private httpService: HttpService, private router: Router) { }

  @Input() formName = 'Create Project';
  @Input() color = 'success';

  public form = new FormBuilder(this.formName, this.color)
    .addFields(
      new FormInput('projectName', 'Project Name', 'text', (value: string) => this.validator.isNickNameValid(value))
    );


  public getFieldValue(id: string) {
    return this.form.getFieldById(id).value;
  }


  public submit() {
    const org: IProject = {
      name: this.getFieldValue('projectName'),
    }

    this.httpService.post('/api/v1/projects/create', org, { responseType: 'text' })
      .subscribe(
        response => {

          this.router.navigateByUrl('/app');
          this.form.reset();

        },

        err => {
          alert('Could not create the project!')
          // alert(err.message)
        }
      );


  }

}
