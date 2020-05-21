import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { IConfirmationResult } from '@tconfirmation/confirm/confirm.interfaces';
import { RoutingService } from '../../zzservices/routing/routting.service';
import { IEventHandlers } from '@tform/reactive-form/reactive-form.interfaces';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  name = 'dialog';

  meta: IDialogMeta;
  //{
  //   bgColor: 'secondary',
  //   textColor: 'white',
  //   title: 'No title (title?)',
  //   events:EventHandler
  //   data: [
  //     { id: '1', name: 'No data' },
  //   ]
  // };

  form: FormGroup = new FormGroup({});

  constructor(private route: ActivatedRoute, private routingService: RoutingService) { }

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


  confirm(event: IConfirmationResult) {
    if (event.status) {

      switch (event.type) {
        case 'open':
          this.onSubmit(event);
          break;
        case 'close':
          this.routingService.closeOutlet();
          break;
        default:
          alert(`Event type does not match with any of events ${event.type}`)
      }

    } else {
      // canceled...
    }
  }

  onSubmit(event: IConfirmationResult) {
    try {

      this.meta.events.onSubmit(this.form.value, event);
      this.closeOutlet();
    } catch (err) {
      alert('Pass the onSubmit handler witht he meta.events.')
      this.closeOutlet();
    }
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

  closeOutlet() {
    this.routingService.closeOutlet();
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
  events?: IEventHandlers;
  data?: {
    id?: string | number;
    name?: string;
  }[];
}


