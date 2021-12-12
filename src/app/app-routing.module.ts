import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {ContactUsComponent} from "./contact-us/contact-us.component";
import {ProductsComponent} from "./products/products.component";
import {AboutUsComponent} from "./about-us/about-us.component";
import {ColloidalGoldPlatformComponent} from "./products/colloidal-gold-platform/colloidal-gold-platform.component";
import {ImmunofluorescencePlatformComponent} from "./products/immunofluorescence-platform/immunofluorescence-platform.component";
import {MolecularDiagnosticsPlatformComponent} from "./products/molecular-diagnostics-platform/molecular-diagnostics-platform.component";
import {CoagulationPlatformComponent} from "./products/coagulation-platform/coagulation-platform.component";
import {DryBiochemicalPlatformComponent} from "./products/dry-biochemical-platform/dry-biochemical-platform.component";

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: 'products',
    children: [
      {path: 'colloidal-gold-platform',component: ColloidalGoldPlatformComponent},
      {path: 'immunofluorescence-platform', component: ImmunofluorescencePlatformComponent},
      {path: 'molecular-diagnostics-platform', component: MolecularDiagnosticsPlatformComponent},
      {path: 'coagulation-platform', component: CoagulationPlatformComponent},
      {path: 'dry-biochemical-platform', component: DryBiochemicalPlatformComponent}
    ]
  },
  {
    path: 'contact-us',
    component: ContactUsComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
