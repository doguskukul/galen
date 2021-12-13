import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-molecular-diagnostics-platform',
  templateUrl: './molecular-diagnostics-platform.component.html',
  styleUrls: ['../products.component.css']
})
export class MolecularDiagnosticsPlatformComponent implements OnInit {

  selectedProduct = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
