import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProjectService } from 'src/app/project/services/project.service';
import { IProject, IProjectsResolved, IPageMeta } from '@sharedModule/interfaces/interfaces';
import { RoutingService } from '../services/routing/routing.service';
import { MultipleViewComponent } from '@sharedModule/multiple-view/multiple-view.component';
import { IOperationEvent } from '@sharedModule/reactive-form/reactive-form.interfaces';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  meta: IPageMeta = {
    meta: {
      errorMessage: '',
      pageTitle: 'Projects'
    },
    data: []
  };

  projects: IProject[];

  selectedId = '';

  errorMessage: string;

  name = 'projects';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private routingService: RoutingService
  ) {

  }

  ngOnInit() {
    const projectResolved: IProjectsResolved = this.route.snapshot.data[this.name];

    if (projectResolved[this.name]) {

      this.projects = projectResolved[this.name];
      this.meta.data = projectResolved[this.name];

    } else {
      this.errorMessage = projectResolved.error.message;

      setTimeout(() => {
        this.errorMessage = null;
        this.router.navigate(['/welcome']);
      }, 3000);
    }



    this.route.paramMap.subscribe(params => {
      this.selectedId = params.get('_id');
    });




  }

  redirect(_id: string | number, name: string, summary: string) {
    this.routingService.editProject(this.router, [_id], { name, summary });
  }


  eventHandler(event: IOperationEvent) {
    switch (event.type) {

      case 'delete':
        this.projects = this.projects.filter(e => e !== event.value);
        this.meta.data = this.projects;
        console.log('deleting item')
        break;
      case 'edit':
        console.log('From here: ', this.meta.data);
        const item = this.projects.find(e => e._id === event.value);
        this.redirect(item._id, item.name, item.summary);
        break;
      default:
        alert('Unexpected behaviour!');
        break;
    }

  }


}
