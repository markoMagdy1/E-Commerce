import { Component } from '@angular/core';
import { CartServiceService } from 'src/app/carts/services/cart-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
 
  constructor(){};
  numOfProducts=JSON.parse(localStorage.getItem("card")!).length
}
