import {
  Component,
  ViewChild,
  Renderer2,
  ElementRef,
  HostListener
} from '@angular/core';
import { CartManagerService } from './services/cart-manager.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  menuActive: Boolean = false;
  tabletBreakpoint: number = 780;
  phoneBreakpoint: number = 600;
  innerWidth: any;
  searchFocused: boolean = false;
  cartCount: number = 0;
  currentYear = new Date().getFullYear();

  @ViewChild('mobileMenu') mobileMenu!: ElementRef<HTMLButtonElement>;

  @HostListener('window:resize',['$event'])
  onResize(event: any){
    this.innerWidth = event.target.innerWidth;
  }
  @HostListener('click', ['$event'])
  onClick(event: any){
    const input = document.querySelector('#searchbar');
    if (input!.contains(event.target)) this.searchFocused = true;
    else this.searchFocused = false;
  }

  constructor(
    private render: Renderer2,
    private cart: CartManagerService
    ){}

  ngOnInit(): void{
    this.innerWidth = window.innerWidth;
    this.updateCart();
  }

  ngAfterViewInit(): void{
    this.render.listen(this.mobileMenu.nativeElement,'click',() => {
      this.switchMenu();
    })
  }

  updateCart(): void{
    this.cart.productList$.subscribe(items => {
      this.cartCount = 0;
      items.forEach( item =>{
        this.cartCount += item.cantidad;
      });
    });
  }

  switchMenu():void {
    this.menuActive = !this.menuActive;
  }
}
