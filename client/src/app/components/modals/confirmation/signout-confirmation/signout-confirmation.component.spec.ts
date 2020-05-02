import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignoutConfirmationComponent } from './signout-confirmation.component';

describe('SignoutConfirmationComponent', () => {
  let component: SignoutConfirmationComponent;
  let fixture: ComponentFixture<SignoutConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignoutConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignoutConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
