import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProdInCar, Producto } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CartManagerService {

  constructor() { }

  productList = new BehaviorSubject<ProdInCar[]>([]);
  productList$ = this.productList.asObservable();

  addToCar(product: Producto, quantity: number): void{
    let products = this.productList.value;
    let index = products.findIndex(item => item.producto.id === product.id);
    if (index !== -1){
      products[index] = new ProdInCar(product, quantity);
    } else {
      products.push(new ProdInCar(product, quantity));
    }
    this.productList.next(products);
  }

  removeItem(id: string|number): void{
    let products = this.productList.value;
    let newList = products.filter(item => item.producto.id !== id);
    this.productList.next(newList);
  }
}
