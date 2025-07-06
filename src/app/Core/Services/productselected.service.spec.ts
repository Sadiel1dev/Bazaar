import { TestBed } from '@angular/core/testing';

import { ProductselectedService } from './productselected.service';

describe('ProductselectedService', () => {
  let service: ProductselectedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductselectedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
