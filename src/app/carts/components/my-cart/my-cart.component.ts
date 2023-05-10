import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../../services/cart-service.service';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css']
})
export class MyCartComponent implements OnInit {
  cardProducts:any;
  total:number=0;

  constructor(private cartService:CartServiceService){}

  ngOnInit(): void {
    this.getCartProducts()
  }

  getCartProducts(){
    this.cardProducts=JSON.parse(localStorage.getItem("card")!)
    this.calculateTotal();
  }

  decreaseQuantity(index:number){
    if(this.cardProducts[index].quantity>1)
    this.cardProducts[index].quantity--;
    this.updateCardproducts()    
  }

  increaseQuantity(index:number){
    this.cardProducts[index].quantity++;
    this.updateCardproducts()
  }

  calculateTotal(){
    this.total=0;
    for(let item in this.cardProducts){
      this.total+=this.cardProducts[item].item.price*this.cardProducts[item].quantity
    }
  }

  updateCardproducts(){
    localStorage.setItem("card",JSON.stringify(this.cardProducts))
    this.calculateTotal();
  }

  deleteProduct(index:number){
    this.cardProducts.splice(index,1)
    this.updateCardproducts()
  }

  clearCart(){
    this.cardProducts=[];
    this.updateCardproducts();
  }

  orderMyCart(){
    let products=this.cardProducts.map((e:any)=>{
      return {productId:e.item.id , quantity:e.quantity}
    })
    let cartModel={
      userId:5,
      date: new Date(),
      products
    }
    console.log(cartModel)
    this.cartService.orderNewCart(cartModel).subscribe(res=>{
      console.log(res)
    })
  }

}
