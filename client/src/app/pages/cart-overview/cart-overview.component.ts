import { Component, OnInit } from '@angular/core';
import { ProdInCar } from 'src/app/models';
import { CartManagerService } from 'src/app/services/cart-manager.service';

@Component({
  selector: 'app-cart-overview',
  templateUrl: './cart-overview.component.html',
  styleUrls: ['./cart-overview.component.sass']
})
export class CartOverviewComponent implements OnInit {

  items: ProdInCar[] = [];
  total: number = 0;

  constructor(private cart: CartManagerService) { }

  ngOnInit(): void {
    window.scroll(0,0);
    this.cart.productList$.subscribe(items => {
      this.total = 0;
      this.items = items;
      items.forEach(item => {
        this.total += parseFloat(item.total);
      })
    });
  }

  removeItem(id: number|string): void{
    this.cart.removeItem(id);
  }
}
