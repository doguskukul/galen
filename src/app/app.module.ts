import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductsComponent } from './products/products.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { ColloidalGoldPlatformComponent } from './products/colloidal-gold-platform/colloidal-gold-platform.component';
import { ImmunofluorescencePlatformComponent } from './products/immunofluorescence-platform/immunofluorescence-platform.component';
import { MolecularDiagnosticsPlatformComponent } from './products/molecular-diagnostics-platform/molecular-diagnostics-platform.component';
import { CoagulationPlatformComponent } from './products/coagulation-platform/coagulation-platform.component';
import { DryBiochemicalPlatformComponent } from './products/dry-biochemical-platform/dry-biochemical-platform.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ProductsComponent,
    ContactUsComponent,
    ColloidalGoldPlatformComponent,
    ImmunofluorescencePlatformComponent,
    MolecularDiagnosticsPlatformComponent,
    CoagulationPlatformComponent,
    DryBiochemicalPlatformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
