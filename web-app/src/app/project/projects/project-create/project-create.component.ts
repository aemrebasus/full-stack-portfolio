import { Component, OnInit } from '@angular/core';
import { FormClass } from '@sharedModule/form/FormClass';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-project-create',
  templateUrl: '../../../shared/form/form.template.html'
})
export class ProjectCreateComponent extends FormClass implements OnInit {

  constructor(formBuilder: FormBuilder) {
    super(formBuilder);

  }

  ngOnInit(): void {

  }


}
