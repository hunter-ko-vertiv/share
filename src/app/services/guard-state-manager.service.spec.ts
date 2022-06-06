import { TestBed } from '@angular/core/testing';

import { GuardStateManagerService } from './guard-state-manager.service';

describe('GuardStateManagerService', () => {
  let service: GuardStateManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuardStateManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
