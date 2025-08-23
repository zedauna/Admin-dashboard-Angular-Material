import {Component, input, OnInit, output} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle} from '@angular/material/card';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {Product} from '@app/models/products.model';
import {MatOption, MatSelect} from '@angular/material/select';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatFormField,
    MatFormField,
    MatFormField,
    MatLabel,
    MatCardContent,
    MatSelect,
    MatOption,
    MatCardActions,
    MatInput,
    MatButton
  ],
  templateUrl: './product-form.html',
  styleUrl: './product-form.scss'
})
export class ProductForm implements OnInit {
  save=output<Product>();
  product =input.required<Product>();

  productForm: FormGroup;
  availabilityStatuses = ['In Stock', 'Out of Stock', 'On Order'];
  returnPolicies = ['No Return', '15 days', '30 days'];

  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],
      discountPercentage: [0, [Validators.min(0), Validators.max(100)]],
      stock: [0, Validators.min(0)],
      brand: [''],
      sku: ['', Validators.required],
      weight: [0, Validators.min(0)],
      dimensions: this.fb.group({
        width: [0, Validators.min(0)],
        height: [0, Validators.min(0)],
        depth: [0, Validators.min(0)],
      }),
      warrantyInformation: [''],
      shippingInformation: [''],
      availabilityStatus: ['', Validators.required],
      returnPolicy: ['', Validators.required],
      minimumOrderQuantity: [0, Validators.min(0)],
    });
  }

  ngOnInit(): void {
    if (this.product()) {
      this.productForm.patchValue(this.product());
    }
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      this.save.emit(this.productForm.value as Product);
    }
  }
}
