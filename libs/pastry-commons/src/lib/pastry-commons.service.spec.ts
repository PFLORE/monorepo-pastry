import { TestBed } from '@angular/core/testing';

import { PastryCommonsService } from './pastry-commons.service';

describe('PastryCommonsService', () => {
  let service: PastryCommonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PastryCommonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
