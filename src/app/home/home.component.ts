import { Component, OnInit } from '@angular/core';
import Splide from '@splidejs/splide';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  selectedItem = 0;
  constructor() { }

  ngOnInit(): void {
    new Splide( '.splide' ).mount();
  }

  changeItem() {
    this.selectedItem ++;
    if (this.selectedItem == 3) {
      this.selectedItem = 0;
    }
  }

}
