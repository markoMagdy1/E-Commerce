import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  baseUrl="https://fakestoreapi.com/";

  constructor(private http:HttpClient) { 

  }

  orderNewCart(model:any){
    return this.http.post(this.baseUrl+"carts",model)
  }
}
