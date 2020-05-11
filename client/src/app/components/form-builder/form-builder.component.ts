import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BaseInput } from './input/input.meta';
// import { FormBuilder } from './form-builder.meta';


@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['style.scss']
})
export class FormBuilderComponent {

  @Input() inputs = [
    new BaseInput().setMeta({
      type: "text"
    }),
    new BaseInput()
      .setMeta({
        type: 'radio',
        name: 'gender',
        label: 'gender',
        options: ['option1', 'option2', 'option 3'],
      })
      .setEvents(t => {
        t.meta.onClicks = [() => alert([t.meta.value])];
        t.meta.onClick = () => {
          t.meta.onClicks.map(f => f());
        }
      })

  ];

}
