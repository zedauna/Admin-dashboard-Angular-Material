import {inject, Injectable, signal} from '@angular/core';
import {ProductsService} from '@app/services/products/products-service';
import {BehaviorSubject} from 'rxjs';
import {emptyProductsJson, Product, ProductsJson} from '@app/models/products.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceShared {

  private ProductsService:ProductsService =inject(ProductsService);

  private productsSubject = new BehaviorSubject<ProductsJson>(emptyProductsJson);
  private _productsJson = signal<ProductsJson>(emptyProductsJson);
  private _productsSearch = signal<Product[]>([]);

  constructor() {
    this.loadUsers();
  }

  private loadUsers() {
    this.ProductsService.getProducts().subscribe(data => {
      this.productsSubject.next(data);
      this._productsJson.set(data);
    });
  }

  updateProducts(products: Product[]) {
    this._productsSearch.set(products);
  }

  productsJson = () => this._productsJson();
  productsSearch = () => this._productsSearch();

}
