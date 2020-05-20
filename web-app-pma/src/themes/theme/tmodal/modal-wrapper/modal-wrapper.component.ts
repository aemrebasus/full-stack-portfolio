import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-wrapper',
  templateUrl: './modal-wrapper.component.html',
  styleUrls: ['./modal-wrapper.component.scss']
})
export class ModalWrapperComponent implements OnInit {

  @Input() bgColor = 'Secondary';
  @Input() textColor = 'white';
  @Input() title = 'No Title (bgColor? textColor? title?)';

  


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  closeOutlet() {
    this.router.navigate(['../pma/home', { outlets: { forms: null } }]);
  }


}
