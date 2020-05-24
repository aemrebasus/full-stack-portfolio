import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ILeftMenuData } from '@shared/tmain-list/left-menu/left-menu.component';


@Component({
  selector: 'app-searchbar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Input() data: ILeftMenuData;

  @Output() filter = new EventEmitter<ILeftMenuData>();

  value;


  constructor() { }

  ngOnInit(): void {

  }


  search() {
    const filteredData = this.data.filter(e =>
      e.values.filter(f => f.toLowerCase().includes(this.value.toLowerCase())).length > 0 ||
      e.pills.filter(g => g.toString().includes(this.value)).length > 0
    );
    this.filter.emit(filteredData);
  }


}
