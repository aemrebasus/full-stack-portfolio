import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  name = 'dialog';

  meta: IDialogMeta = {
    bgColor: 'secondary',
    textColor: 'white',
    title: 'No title (title?)',
    data: [
      { id: '1', name: 'No data' },
      { id: '2', name: 'No data' },
      { id: '3', name: 'No data' },
      { id: '4', name: 'No data' },
    ]
  };

  form: FormGroup = new FormGroup({});

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {


    const control = new FormControl('');
    this.form.addControl(this.name, control);

    this.route.data.subscribe(data => {

      this.meta = data.resolved;

      if (!data.resolved) {
        throw new Error('Please provide the data for dialog!');
      }
    });


  }

  onSubmit() {

  }

  bgColor() {
    return this.meta.bgColor;
  }

  textColor() {
    return this.meta.textColor;
  }

  title() {
    return this.meta.title;
  }

  data() {
    return this.meta.data;
  }

}

/**
 * @bgColor : 'secondary',
 * @textColor : 'white',
 * @title : 'No title (title?)',
 * @data : IEntity
 */
export interface IDialogMeta {
  bgColor?: string;
  textColor?: string;
  title?: string;
  data?: {
    id?: string | number;
    name?: string;
  }[];
}


