import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleViewComponent } from './multiple-view.component';

describe('MultipleViewComponent', () => {
  let component: MultipleViewComponent;
  let fixture: ComponentFixture<MultipleViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
