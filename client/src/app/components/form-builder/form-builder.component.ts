import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from './form-builder.meta';
import { HttpService } from '@services/http/http.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['style.scss']
})
export class FormBuilderComponent {

  constructor(private httpService: HttpService, private router: Router) { }

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

            if (this.form.meta.redirection) {
              this.router.navigateByUrl(this.form.meta.redirection);
            }

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
