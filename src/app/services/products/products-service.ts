import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, map, Observable, of} from 'rxjs';
import {apiUrlProducts} from '../../utils/linksApi';
import {emptyProductsJson, ProductsJson} from '../../models/products.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private http: HttpClient = inject(HttpClient);
  private apiUrl = apiUrlProducts;

  getProducts(): Observable<ProductsJson> {
    return this.http
      .get<ProductsJson>(this.apiUrl)
      .pipe(
        map(JsonArray => {return JsonArray}),
        catchError((error)=>{
          console.error('Erreur:', error);
          return of(emptyProductsJson)
        })
      );
  }
}
