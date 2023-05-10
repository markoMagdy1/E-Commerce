import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  baseUrl="https://fakestoreapi.com/";
  constructor(private http:HttpClient) { }


  getAllProducts(){
   return this.http.get(this.baseUrl+'products')
  }
  getProductByID(id:any){
    return this.http.get(this.baseUrl+'products/'+id)

  }

  getAllCategories(){
    return this.http.get(this.baseUrl+'products/categories')
   }

   getByCategorie(cate:string){
    return this.http.get(this.baseUrl+'products/category/'+cate)
   }



}
