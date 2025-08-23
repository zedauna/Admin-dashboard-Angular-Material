import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardInfo } from './product-card-info';

describe('ProductCardInfo', () => {
  let component: ProductCardInfo;
  let fixture: ComponentFixture<ProductCardInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCardInfo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCardInfo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
