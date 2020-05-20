import { Component, OnInit, Input } from '@angular/core';
import { RoutingService } from '../../zzservices/routing/routting.service';

@Component({
  selector: 'app-modal-wrapper',
  templateUrl: './modal-wrapper.component.html',
  styleUrls: ['./modal-wrapper.component.scss']
})
export class ModalWrapperComponent implements OnInit {

  @Input() bgColor = 'Secondary';
  @Input() textColor = 'white';
  @Input() title = 'No Title (bgColor? textColor? title?)';


  constructor(private routingService: RoutingService) { }

  ngOnInit(): void {
  }

  closeOutlet() {
    this.routingService.closeOutlet();
  }


}
