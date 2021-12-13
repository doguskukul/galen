import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colloidal-gold-platform',
  templateUrl: './colloidal-gold-platform.component.html',
  styleUrls: ['../products.component.css']
})
export class ColloidalGoldPlatformComponent implements OnInit {

  selectedTitle = 0;
  selectedProduct = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
