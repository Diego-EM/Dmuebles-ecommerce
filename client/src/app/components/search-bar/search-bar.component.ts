import { Component, OnInit, ViewChild, HostListener, ElementRef } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { SearchRes } from 'src/app/models';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.sass']
})
export class SearchBarComponent implements OnInit {

  userInput: string = "";
  isFocused: boolean = false;
  searchResults: SearchRes[] = [];

  @ViewChild('Input') Input!: ElementRef<HTMLInputElement>;

  @HostListener('input', ['$event'])
  onInput(event: any){
    this.userInput = event.target.value;
    if(this.userInput.length > 0){
      this.getSearchResults(this.userInput);
    }
  }

  constructor(private search: ProductsService) { }

  ngOnInit(): void { }

  getSearchResults(req: string): void{
    this.search.getSearchResults(req)
      .subscribe((res: SearchRes[]) => {
        this.searchResults = [];
        for (let key in res){
          this.searchResults.push(res[key]);
        }
      });
  }
}
