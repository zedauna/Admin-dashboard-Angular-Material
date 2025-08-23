import { TestBed } from '@angular/core/testing';

import { SidenavHeader } from './sidenav-header';

describe('SidenavHeader', () => {
  let service: SidenavHeader;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SidenavHeader);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
