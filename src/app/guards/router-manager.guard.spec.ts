import { TestBed } from '@angular/core/testing';

import { RouterManagerGuard } from './router-manager.guard';

describe('RouterManagerGuard', () => {
  let guard: RouterManagerGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RouterManagerGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
