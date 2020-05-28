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

      this.httpService.post(route, this.form.toObject(), { responseType: 'text' })
        .subscribe(
          response => {
            this.submitted.emit(response);
            alert(response);

            setTimeout(() => {

              this.router.navigateByUrl('/')
                .then(_ => {
                  if (this.form.meta.redirection) {
                    this.router.navigateByUrl(this.form.meta.redirection);
                  } else {
                    this.router.navigateByUrl('/app');
                  }
                });
            }, 1000);

          },
          err => {
            this.form.isFormValid = false;
            this.form.error = err.message;
            this.form.inputs.forEach(i => {
              i.meta.isValid = false;
            });
          }
        );
    } else {
      alert('Form is not valid')
    }

  }


  reset() {
    this.form.reset();
  }


}
