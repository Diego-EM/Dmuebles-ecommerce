import { Component, OnInit, Input } from '@angular/core';
import { Producto } from 'src/app/models';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.sass']
})
export class SmallCardComponent implements OnInit {

  @Input() id: number|string|undefined = undefined;
  @Input() productDetails?: Producto;

  constructor(private connect: ProductsService) { }

  ngOnInit(): void {
    if(this.id){
      this.connect.getProduct(this.id)
        .subscribe(product => {
          this.productDetails = product;
        });
    }
  }

}
