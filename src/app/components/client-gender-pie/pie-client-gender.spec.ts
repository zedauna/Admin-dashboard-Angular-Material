import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieClientGender } from './pie-client-gender';

describe('PieClientGender', () => {
  let component: PieClientGender;
  let fixture: ComponentFixture<PieClientGender>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PieClientGender]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PieClientGender);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
