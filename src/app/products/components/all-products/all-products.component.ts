import { Component,OnInit } from '@angular/core';
import { ProductsService } from '../../servvices/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  searchTerm:string="";
  products: any =[];
  categories: any =[];
  cardProducts:any=[];


  constructor(private productsService:ProductsService){}

  ngOnInit(): void {
   this.getProducts() 
   this.getCategories();
  }

  getProducts(){
    this.productsService.getAllProducts().subscribe(res=>{
      this.products=res;
    },error=>{
      alert(error)
    })
  }

  getCategories(){
    this.productsService.getAllCategories().subscribe(res=>{
      this.categories=res;
    },error=>{
      alert(error)
    })
  }

  filterProducts(event:any){
    let value=event.target.value;
    if(value != 'all'){
      console.log(value)
      this.getFilterdCategories(value);
    }else{
      this.getProducts();
    }
    
  }

  getFilterdCategories(keyword:string){
    this.productsService.getByCategorie(keyword).subscribe(res=>{
      this.products=res;
      console.log(this.categories)
    },error=>{
      alert(error)
    })
  }

  addToProduct(event:any){
    if("card" in localStorage){
      this.cardProducts=JSON.parse(localStorage.getItem("card")!)
      let item=this.cardProducts.find((e:any)=>e.item.id==event.item.id);
      if(item){
        alert("item aleady has been added");
      }else{
        this.cardProducts.push(event)
        localStorage.setItem("card",JSON.stringify(this.cardProducts));
      }
    }
    else{
      this.cardProducts.push(event)
      localStorage.setItem("card",JSON.stringify(this.cardProducts));
    }
  }

}
