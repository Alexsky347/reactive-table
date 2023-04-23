import { TestBed } from '@angular/core/testing';

import { IsLoggedInterceptor } from './is-logged.interceptor';

describe('IsLoggedInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      IsLoggedInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: IsLoggedInterceptor = TestBed.inject(IsLoggedInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
