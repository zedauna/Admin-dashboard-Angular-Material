import {Component, computed, effect, inject, model} from '@angular/core';
import {toObservable, toSignal} from '@angular/core/rxjs-interop';
import {combineLatest, debounceTime} from 'rxjs';
import {ProductSearch} from '../../components/product-search/product-search';
import {ProductCardInfo} from '../../components/product-card-info/product-card-info';
import {ProductsServiceShared} from '../../services/products/products-service-shared';

@Component({
  selector: 'app-products',
  standalone:true,
  imports: [ProductCardInfo, ProductSearch],
  templateUrl: './products.html',
  styleUrl: './products.scss'
})
export class Products {
  private ProductsServiceShared:ProductsServiceShared =inject(ProductsServiceShared);

  products=computed(()=>{
    return this.ProductsServiceShared.productsJson().products;
  });

  searchProduct=model('');
  searchCategory=model('');
  searchRating=model('');

  search=toSignal(
    combineLatest([
      toObservable(this.searchProduct).pipe(debounceTime(500)),
      toObservable(this.searchCategory).pipe(debounceTime(500)),
      toObservable(this.searchRating).pipe(debounceTime(500))
    ]).pipe(
      debounceTime(500)
    ),
    { initialValue: ['', '', ''] as [string, string, string] }
  );

  productsFiltered= computed(()=> {
    const [searchProduct, searchCategory, searchRating ] = this.search();

    return this.products().filter(product => {

      // Filtre par nom
      if (searchProduct &&
        !product.title.toLowerCase().includes(searchProduct.toLowerCase())) {
        return false;
      }

      // Filtre par catégorie
      if (searchCategory &&
        !product.category.toLowerCase().includes(searchCategory.toLowerCase())) {
        return false;
      }

      // Filtre par rating (seulement si spécifié)
      if (searchRating !== null) {
        // Produits sans rating sont exclus
        if (product.rating === undefined) return false;

        // Produits avec rating insuffisant sont exclus
        return product.rating >= Number(searchRating);
      }

      return true;
    });
  });

  constructor() {
    effect(() => {
      //console.log(this.search())
      //console.home-table(this.productsFiltered());
      this.ProductsServiceShared.updateProducts(this.productsFiltered())
    });
  }

}
