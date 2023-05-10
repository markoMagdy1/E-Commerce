import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from "../shared/shared.module";
import { ProductComponent } from './components/product/product.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SliderComponent } from './components/slider/slider.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
    declarations: [
        AllProductsComponent,
        ProductDetailsComponent,
        ProductComponent,
        SliderComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
       SharedModule,
       FormsModule,
       RouterModule,
       Ng2SearchPipeModule
       
        
        
    ]
})
export class ProductsModule { }
