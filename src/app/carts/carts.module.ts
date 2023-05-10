import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { MyCartComponent } from './components/my-cart/my-cart.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MyCartComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    SharedModule,
    FormsModule
  ],

})
export class CartsModule { }
