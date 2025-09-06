import {ChangeDetectionStrategy, Component, computed, effect, inject} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {ProductsServiceShared} from '../../services/products/products-service-shared';
import {UpperCasePipe} from '@angular/common';
import { GuachosRatingModule } from 'guachos-rating';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-card-info',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, UpperCasePipe, GuachosRatingModule, FormsModule],
  templateUrl: './product-card-info.html',
  styleUrl: './product-card-info.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardInfo {
  private router = inject(Router);
  private ProductsServiceShared:ProductsServiceShared =inject(ProductsServiceShared);

  products= computed(()=>{
    const ds=this.ProductsServiceShared.productsSearch()
    return ds ? ds : this.ProductsServiceShared.productsJson().products;
  });

  detailsProducts(id:number){
    this.router.navigate(['products-details',id]);
  }

  constructor() {
    effect(() => {
      //console.home-table(this.products());
    });
  }

}
