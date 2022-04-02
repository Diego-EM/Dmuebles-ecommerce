import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-info',
  templateUrl: './page-info.component.html',
  styleUrls: ['./page-info.component.sass']
})
export class PageInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scroll(0,0);
  }

}
