import { TestBed } from '@angular/core/testing';

import { ViewSettingService } from './view-setting.service';

describe('ViewSettingService', () => {
  let service: ViewSettingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewSettingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
