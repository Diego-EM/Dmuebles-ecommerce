import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.sass']
})
export class BigCardComponent implements OnInit {

  @Input() id: string|number = 1;
  @Input() reverse: boolean = false;
  productDetails?: Product;

  constructor(private connect: ProductsService) { }

  ngOnInit(): void {
    this.connect.getProduct(this.id)
      .subscribe(product => this.productDetails = product);
  }

}
