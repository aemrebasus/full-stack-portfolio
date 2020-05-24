import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueViewComponent } from './component';

describe('IssueViewComponent', () => {
  let component: IssueViewComponent;
  let fixture: ComponentFixture<IssueViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
