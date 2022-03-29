import { Injectable } from '@angular/core';
import { ProdInCar, Producto } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CartManagerService {

  constructor() { }

  productInCar: ProdInCar[] = [];

  addToCar(product: Producto, quantity: number): void{
    let index = this.productInCar.findIndex(item => item.producto.id === product.id);
    if (index !== -1){
      this.productInCar[index] = new ProdInCar(product, quantity);
    } else {
      this.productInCar.push(new ProdInCar(product, quantity));
    }
  }

  removeFromCar(id: string|number): void{
  }

  countProducts(): number{
    return this.productInCar.length;
  }
}
