import { TestBed } from '@angular/core/testing';

import { PastryComponentsService } from './pastry-components.service';

describe('PastryComponentsService', () => {
  let service: PastryComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PastryComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
