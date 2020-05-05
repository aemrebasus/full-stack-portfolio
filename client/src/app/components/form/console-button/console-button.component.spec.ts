import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsoleButtonComponent } from './console-button.component';

describe('ConsoleButtonComponent', () => {
  let component: ConsoleButtonComponent;
  let fixture: ComponentFixture<ConsoleButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsoleButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsoleButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
