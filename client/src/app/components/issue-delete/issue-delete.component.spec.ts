import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueDeleteComponent } from './issue-delete.component';

describe('IssueDeleteComponent', () => {
  let component: IssueDeleteComponent;
  let fixture: ComponentFixture<IssueDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
