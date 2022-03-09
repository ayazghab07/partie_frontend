import { TestBed } from '@angular/core/testing';

import { ParieurGuard } from './parieur.guard';

describe('ParieurGuard', () => {
  let guard: ParieurGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ParieurGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
