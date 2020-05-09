import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-list',
  templateUrl: './input-list.component.html'
})
export class InputListComponent {

  // @Input() input: FormInputList = new FormInputList('description', 'Description', 'text');

  // add() {
  //   if (this.input.value !== '') {
  //     this.input.list.push(this.input.value);
  //     this.input.value = '';
  //   }
  // }

  // delete() {
  //   this.input.list.pop();
  //   this.input.value = '';
  // }


  // keyDown(event) {
  //   if (event.key === 'Enter') {
  //     this.add();
  //   } else if (event.key === 'Delete') {
  //     this.delete();
  //   }
  // }

}

// export class FormInputList extends FormInput {
//   public list: string[] = [];
// }

