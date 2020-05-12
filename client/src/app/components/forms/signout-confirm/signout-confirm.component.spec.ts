import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignoutConfirmComponent } from './signout-confirm.component';

describe('SignoutConfirmComponent', () => {
  let component: SignoutConfirmComponent;
  let fixture: ComponentFixture<SignoutConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignoutConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignoutConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
