import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsMenuComponent } from './projects-menu.component';

describe('ProjectsMenuComponent', () => {
  let component: ProjectsMenuComponent;
  let fixture: ComponentFixture<ProjectsMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
