import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProjectService } from 'src/app/services/project/project.service';
import { IProject } from 'src/app/shared/interfaces/IProject';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit, OnChanges {

  projects: IProject[] = [];

  selectedId = '';

  constructor(private projectService: ProjectService, private router: Router, private route: ActivatedRoute) {

  }
  ngOnChanges(changes: SimpleChanges): void {

  }

  ngOnInit() {

    this.projectService.getProjects()
      .subscribe(
        prjs => this.projects = prjs
      );

    this.route.paramMap.subscribe(params => {
      this.selectedId = params.get('id');
    });
  }

  redirect(_id: string, name: string, summary: string) {
    this.router.navigate(['/projects', _id, 'edit', { name, summary }], { queryParamsHandling: 'preserve' });
  }




}
