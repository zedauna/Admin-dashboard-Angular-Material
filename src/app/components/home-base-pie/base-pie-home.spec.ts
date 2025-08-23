import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasePieHome } from './base-pie-home';

describe('BasePieHome', () => {
  let component: BasePieHome;
  let fixture: ComponentFixture<BasePieHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasePieHome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasePieHome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
