import { TestBed } from '@angular/core/testing';

import { UsersServiceShared } from './users-service-shared';

describe('UsersServiceShared', () => {
  let service: UsersServiceShared;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersServiceShared);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
