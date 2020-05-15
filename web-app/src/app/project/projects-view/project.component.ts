import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProjectService } from 'src/app/project/services/project.service';
import { IProject, IProjectsResolved, IPageMeta } from '@sharedModule/interfaces/interfaces';
import { RoutingService } from '../services/routing/routing.service';

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
    }
  };

  projects: IProject[];

  filteredProjects: IProject[];

  filterBy = '';

  selectedId = '';

  errorMessage: string;

  pageTitle = 'Projects';

  name = 'projects';

  constructor(
    private projectService: ProjectService,
    private router: Router,
    private route: ActivatedRoute,
    private routingService: RoutingService
  ) {

  }

  ngOnInit() {
    const projectResolved: IProjectsResolved = this.route.snapshot.data[this.name];

    if (projectResolved[this.name]) {

      this.projects = projectResolved[this.name];
      this.filteredProjects = this.projects;

      this.meta.data = this.projects;


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

  redirect(_id: string, name: string, summary: string) {
    this.routingService.editProject(this.router, [_id], { name, summary });
  }


  filter(filterBy: string) {
    this.filteredProjects = this.projectService.filter(this.projects, filterBy);
  }



}
