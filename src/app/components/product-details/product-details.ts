import {Component, computed, effect, inject} from '@angular/core';
import {CurrencyPipe, DatePipe} from '@angular/common';
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardImage,
  MatCardSubtitle,
  MatCardTitle
} from '@angular/material/card';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductsServiceShared} from '@app/services/products/products-service-shared';
import {toSignal} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [
    CurrencyPipe,
    MatCardHeader,
    MatCardSubtitle,
    MatCardTitle,
    MatCardContent,
    MatCard,
    DatePipe,
    MatCardImage
  ],
  templateUrl: './product-details.html',
  styleUrl: './product-details.scss'
})
export class ProductDetails {
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  private ProductsServiceShared:ProductsServiceShared =inject(ProductsServiceShared);

  products= computed(()=>{
    return this.ProductsServiceShared.productsJson().products;
  });

  routeParams = toSignal(this.route.params);

  product= computed(() => {
    if(this.routeParams()) {
      const params = this.routeParams();
      if (params) {
        const id = parseInt(params['id']);
        const found = this.products().find(p => p.id === id);
        if (found) {
          return found;
        }
      }
    }
    this.navigateBack();
    return null;
  });


  navigateBack() {
    this.router.navigate(['/home']);
  }

  navigateProduits() {
    this.router.navigate(['/products']);
  }

  navigateProduitEditer(){

  }

  navigateProduitSupprimer(){

  }

  constructor() {
    effect(() => {
      //console.home-table(this.product());
    });
  }

}
