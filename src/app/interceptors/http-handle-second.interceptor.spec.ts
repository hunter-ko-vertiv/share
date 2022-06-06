import { TestBed } from '@angular/core/testing';

import { HttpHandleSecondInterceptor } from './http-handle-second.interceptor';

describe('HttpHandleSecondInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttpHandleSecondInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HttpHandleSecondInterceptor = TestBed.inject(HttpHandleSecondInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
