import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchRes } from '../models';
import { Producto } from '../models';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  URL: string = "http://localhost/ecommerce/server/api/";

  constructor(private http: HttpClient) { }

  getSearchResults(req: string){
    return this.http.get<SearchRes[]>(`${this.URL}?search=${req}`);
  }

  getProduct(id: string|number){
    return this.http.get<Producto>(`${this.URL}?id=${id}`)
      .pipe(
        map( res => Producto.infoProducto(res) )
      )
  }

  getProductsByCategory(categoryId: string|number){
    return this.http.get<Producto[]>(`${this.URL}?cat=${categoryId}`)
    .pipe(
      map( res => {
        return res.map( product => Producto.infoProducto(product) )
      })
    )
  }
}
