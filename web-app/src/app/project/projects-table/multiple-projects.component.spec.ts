import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleProjectsComponent } from './multiple-projects.component';

describe('MultipleProjectsComponent', () => {
  let component: MultipleProjectsComponent;
  let fixture: ComponentFixture<MultipleProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
