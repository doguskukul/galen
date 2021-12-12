import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coagulation-platform',
  templateUrl: './coagulation-platform.component.html',
  styleUrls: ['../products.component.css']
})
export class CoagulationPlatformComponent implements OnInit {

  selectedProduct = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
