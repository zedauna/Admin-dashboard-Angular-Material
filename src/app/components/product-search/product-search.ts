import {Component, computed, effect, inject, model} from '@angular/core';
import {MatFormField, MatInput, MatLabel} from "@angular/material/input";
import {MatCard} from '@angular/material/card';
import {MatAutocomplete, MatAutocompleteTrigger, MatOption} from '@angular/material/autocomplete';
import {FormsModule} from '@angular/forms';
import {ProductsServiceShared} from '@app/services/products/products-service-shared';

@Component({
  selector: 'app-product-search',
  imports: [
    MatFormField,
    MatInput,
    MatLabel,
    MatFormField,
    MatCard,
    MatAutocompleteTrigger,
    MatOption,
    MatAutocomplete,
    FormsModule,
  ],
  templateUrl: './product-search.html',
  styleUrl: './product-search.scss'
})
export class ProductSearch {

  private ProductsServiceShared:ProductsServiceShared =inject(ProductsServiceShared);

  products= computed(()=>{
    return this.ProductsServiceShared.productsJson().products;
  });

  searchProduct=model('');
  searchCategory=model('');
  searchRating=model('');


  filteredProducts=computed(()=> {
    const listp=this.products().map(product=> product.title);
    return this.products() ? listp.sort() : null;
  });

  filteredCategory=computed(()=> {
    const listc=[...new Set(this.products().map(product=> product.category))];
    return this.products() ?listc.sort() : null;
  });

  filteredRating=computed(()=> {
    const list_rating=this.products().map(product=> product.rating);
    return this.products()?list_rating.sort((a, b) => a - b) : null ;
  });


  constructor() {
    effect(() => {
      //const list_title=this.products().map(product=> product.category);
      //const list_title_unique=[...new Set(this.products().map(product=> product.category))];
      //console.log(list_title);
      //console.log(list_title_unique);
    });
  }

}
