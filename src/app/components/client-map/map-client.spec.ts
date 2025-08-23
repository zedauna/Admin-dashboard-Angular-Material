import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapClient } from './map-client';

describe('MapClient', () => {
  let component: MapClient;
  let fixture: ComponentFixture<MapClient>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapClient]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapClient);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
