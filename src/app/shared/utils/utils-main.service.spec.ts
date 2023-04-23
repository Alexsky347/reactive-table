import { TestBed } from '@angular/core/testing';

import { UtilsMainService } from './utils-main.service';

describe('UtilsMainService', () => {
  let service: UtilsMainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtilsMainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
