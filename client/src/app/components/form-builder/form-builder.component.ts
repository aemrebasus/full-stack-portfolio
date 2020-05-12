import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from './form-builder.meta';
import { HttpService } from '@services/http/http.service';


@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['style.scss']
})
export class FormBuilderComponent {

  constructor(private httpService: HttpService) { }

  @Input() form: FormBuilder;
  @Output() submitted = new EventEmitter();

  submit() {
    const route = this.form.meta.route;
    this.form.submit();

    if (this.form.isFormValid) {

      this.httpService.post(route, this.form.toObject())
        .subscribe(
          response => {
            this.submitted.emit(response);
          },
          err => {
            this.form.isFormValid = false;
            this.form.error = err.message;
            this.form.inputs.forEach(i => {
              i.meta.isValid = false;
            });
          }
        );


    }

  }


  reset() {
    this.form.reset();
  }


}
