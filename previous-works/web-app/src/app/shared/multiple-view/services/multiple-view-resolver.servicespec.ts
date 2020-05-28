import { TestBed } from '@angular/core/testing';

import { MultipleViewResolverService } from './multiple-view-resolver.service';

describe('MultipleViewResolverService', () => {
  let service: MultipleViewResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MultipleViewResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
