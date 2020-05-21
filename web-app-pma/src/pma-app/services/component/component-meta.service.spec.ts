import { TestBed } from '@angular/core/testing';

import { ComponentMetaService } from './component-meta.service';

describe('ComponentMetaService', () => {
  let service: ComponentMetaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComponentMetaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
