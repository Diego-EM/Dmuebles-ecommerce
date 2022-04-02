import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/models';
import { CartManagerService } from 'src/app/services/cart-manager.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.sass']
})
export class ProductViewComponent implements OnInit {

  currentProduct: Producto;
  moreProducts: number[] = [];

  @ViewChild('addToCar') addToCar: ElementRef<HTMLButtonElement>;
  @ViewChild('productQuantity') productQuantity: ElementRef<HTMLInputElement>;


  @HostListener('click',['$event'])
  onClick(event: any){
    if(this.addToCar.nativeElement.contains(event.target)){
      const quantity = parseInt(this.productQuantity.nativeElement.value);
      if (quantity > 0 && quantity <= this.currentProduct.stock){
        this.cart.addToCar(this.currentProduct,quantity);
      } else {
        this.cart.addToCar(this.currentProduct,this.currentProduct.stock);
        this.productQuantity.nativeElement.value = this.currentProduct.stock.toString();
      }
    }
  }

  constructor(
    private route: ActivatedRoute,
    private connect: ProductsService,
    private cart: CartManagerService
    ) { }

  ngOnInit(): void {
    window.scroll(0,0);
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if(id)
        this.connect.getProduct(id)
          .subscribe((product: Producto) => this.currentProduct = product);
    });
    this.refreshPage();
  }

  refreshPage(): void{
    if(this.productQuantity) this.productQuantity.nativeElement.value = '1';
    this.moreProducts = [];
    for (let i = 0; i < 4; i++){
      let random = Math.ceil(Math.random() * 35);
      this.moreProducts.push(random);
    }
  }

  scrollToTop(): void{
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }
}
