import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { ProductDetailsComponent } from './products/components/product-details/product-details.component';
import { MyCartComponent } from './carts/components/my-cart/my-cart.component';

const routes: Routes = [
  {path:'products' , component:AllProductsComponent},
  {path:'products/details/:id' , component:ProductDetailsComponent},
  {path:'myCart' , component:MyCartComponent},

  {path:'**' , redirectTo:"products" ,pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
