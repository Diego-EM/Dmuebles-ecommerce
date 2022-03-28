import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/models';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.sass']
})
export class ProductViewComponent implements OnInit {

  currentProduct!: Producto;
  moreProducts: number[] = [];

  constructor(
    private route: ActivatedRoute,
    private connect: ProductsService
    ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if(id)
        this.connect.getProduct(id)
          .subscribe((product: Producto) => this.currentProduct = product);
    });
    this.refreshRecomendations();
  }

  getRandomNumber(): number{
    let random = Math.ceil(Math.random() * 24);
    return random;
  }

  refreshRecomendations(): void{
    this.moreProducts = [];
    for (let i = 0; i < 4; i++){
      this.moreProducts.push(this.getRandomNumber());
    }
  }

  scrollToTop(): void{
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }
}
