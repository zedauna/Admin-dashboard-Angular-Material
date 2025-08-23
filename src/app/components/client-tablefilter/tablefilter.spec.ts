import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tablefilter } from './tablefilter';

describe('Tablefilter', () => {
  let component: Tablefilter;
  let fixture: ComponentFixture<Tablefilter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tablefilter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tablefilter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
