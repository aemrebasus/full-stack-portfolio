import { TestBed } from '@angular/core/testing';

import { RouttingService } from './routting.service';

describe('RouttingService', () => {
  let service: RouttingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouttingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
