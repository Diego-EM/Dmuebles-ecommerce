import {
  Component,
  ViewChild,
  Renderer2,
  ElementRef,
  HostListener
} from '@angular/core';

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
    private render: Renderer2
    ){}

  ngOnInit(): void{
    this.innerWidth = window.innerWidth;
  }

  ngAfterViewInit(): void{
    this.render.listen(this.mobileMenu.nativeElement,'click',() => {
      this.switchMenu();
    })
  }

  switchMenu():void {
    this.menuActive = !this.menuActive;
  }
}
