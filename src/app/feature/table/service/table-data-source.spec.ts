import { TestBed } from '@angular/core/testing';

import { TableProviderService } from './table-data-source';

describe('TableProviderService', () => {
  let service: TableProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TableProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
