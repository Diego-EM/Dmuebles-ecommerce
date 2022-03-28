import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/models';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass']
})
export class ProductListComponent implements OnInit {

  category: string|null = null;
  productList?: Producto[] = [];

  constructor(
    private route: ActivatedRoute,
    private connect: ProductsService
    ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const request = params.get('req');

      if (request && request.match(/^\d+$/)){
        this.category = request;
        this.connect.getProductsByCategory(request)
          .subscribe(products => {
            this.productList = [];
            for (let i in products){
              this.productList?.push(products[i]);
            }
          });
      } else {
        console.log('This is a search');
      }
    })
  }
}
