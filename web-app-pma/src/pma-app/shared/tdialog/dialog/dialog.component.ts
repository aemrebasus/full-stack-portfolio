import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { IConfirmationResult } from '@shared/tconfirmation/confirm/confirm.interfaces';
import { IViewConfiguration } from '@pma/core/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  readonly name = 'name';

  @Input() config: IViewConfiguration;


  form: FormGroup = new FormGroup({});



  constructor(private route: ActivatedRoute, private router: Router) { }


  ngOnInit(): void {

    this.route.data.subscribe(data => {

      this.config = data.resolved;

      this.config.toInputs().forEach(inputControl => {
        this.form.addControl(inputControl.name, new FormControl(''))
      })

    });

  }


  confirm(event: IConfirmationResult) {

    /**
     * THis component is used only for opening a project (for now)
     * only open-event consumed!
     */

    if (event.status) {
      if (event.type === 'open') {

        this.onSubmit(event);

      } else if (event.type === 'close') {

        this.router.navigate(['/pma']);

      }
    }
  }

  getByName(nae: string) {

  }

  onSubmit(event: IConfirmationResult) {
    try {

      this.config.dispatch({
        type: 'submit',
        paylaod: this.form.value
      });

    } catch (err) {

    } finally {

      this.router.navigate(['/pma']);

    }
  }

  meta() {
    return this.config.configuration.meta;
  }
  bgColor() {
    return this.meta().bgColor;
  }

  textColor() {
    return this.meta().textColor;
  }

  title() {
    return this.meta().title;
  }

  data() {
    return this.config.configuration.data;
  }


}


