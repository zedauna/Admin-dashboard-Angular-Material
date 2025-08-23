import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseChartHome } from './base-chart-home';

describe('BaseChartHome', () => {
  let component: BaseChartHome;
  let fixture: ComponentFixture<BaseChartHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaseChartHome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseChartHome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
