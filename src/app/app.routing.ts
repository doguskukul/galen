import {Routes} from "@angular/router";
import {ContactUsComponent} from "./contact-us/contact-us.component";
import {HomeComponent} from "./home/home.component";
import {ProductsComponent} from "./products/products.component";

export const AppRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about-us',
    component: ContactUsComponent
  },
  {
    path: 'products',
    component: ProductsComponent
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
