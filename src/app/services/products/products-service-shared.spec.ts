import { TestBed } from '@angular/core/testing';

import { ProductsServiceShared } from './products-service-shared';

describe('ProductsServiceShared', () => {
  let service: ProductsServiceShared;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsServiceShared);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
