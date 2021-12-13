import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dry-biochemical-platform',
  templateUrl: './dry-biochemical-platform.component.html',
  styleUrls: ['../products.component.css']
})
export class DryBiochemicalPlatformComponent implements OnInit {

  selectedProduct = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
