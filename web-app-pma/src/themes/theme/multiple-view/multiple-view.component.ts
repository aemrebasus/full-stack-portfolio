import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IViewData } from './services/multiple-view-resolver.service';
import { SERVICES, ACCESSES } from '@services/user/user-setting.service';


@Component({
  selector: 'app-multiple-view',
  templateUrl: './multiple-view.component.html',
  styleUrls: ['./multiple-view.component.scss']
})
export class MultipleViewComponent implements OnInit {

  meta: IViewData;

  filteredData: any = [];

  data: any[] = [];

  thead: string[] = [];

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }


  ngOnInit(): void {


    this.activatedRoute.data.subscribe(resolved => {

      this.meta = resolved.data as IViewData;

      /**
       * Keep the original value
       */
      this.data = resolved.data.data;

      /**
       * Serialize the data to array to render based on index number instead of index value
       */
      this.meta.data = this.meta.data.map(r => serialize(r));

      /**
       * Set the thead
       */
      this.thead = determineHeader(this.meta.data[0]);

      /**
       * If the header value set true, then delete the first item from the array since it is just a helper to create the table.
       */
      if (this.meta.meta.header) {
        this.meta.data.shift();
      }

      /**
       * set the filtered data to the actual data so that we do not lose data while filtering it.
       */
      this.filteredData = this.meta.data;
    });

  }

  /**
   * 
   * @param id id of the clicked item
   */
  onViewClick(id: string) {

  }



  onEditClick(id: string) {
    this.router.navigate([this.meta.meta.type, 'edit'], { queryParams: { ...this.data.find(e => e.id === id) } });
  }

  onDeleteClick(id: string) {

  }


  onInput(filterValue: string) {
    this.filteredData = this.meta.data.filter(e => {
      if (e.toString().toLowerCase().includes(filterValue.toLowerCase())) {
        return true;
      } else {
        return false;
      }
    });
  }




  hasService(service: SERVICES | string) {
    return this.meta.auth.services.includes(service);
  }

  serviceSearch() {
    return this.hasService(SERVICES.SEARCH);
  }

  /**
   * Enable and disable the buttons based on user's authorization!
   */

  hasAccess(access: ACCESSES | string) {
    return this.meta.auth.accesses.includes(access);

  }


  accessCreate() {
    return this.hasAccess(ACCESSES.CREATE);
  }

  accessDelete() {
    return this.hasAccess(ACCESSES.DELETE);
  }

  accessEdit() {
    return this.hasAccess(ACCESSES.UPDATE);
  }

  accessView() {
    return this.hasAccess(ACCESSES.VIEW);
  }




}

function serialize(object: object) {
  const serialized = [];
  for (const o of Object.entries(object)) {
    serialized.push(o);
  }
  return serialized;
}


function determineHeader(data: any[]) {
  const thead = [];
  data.forEach(e => {
    if (typeof e[0] === 'object') {
      e[0].forEach(i => {
        thead.push(i[0]);
      });
    } else {
      thead.push(e[0]);
    }
  });
  return thead;
}
