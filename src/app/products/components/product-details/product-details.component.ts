import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../servvices/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  id:any;
  product:any;
  constructor(private route:ActivatedRoute,private service:ProductsService){
    this.id=route.snapshot.paramMap.get("id");
    console.log(this.id);
   
  }
  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(){
    this.service.getProductByID(this.id).subscribe(res=>{
      this.product=res
      console.log(res)
    }) 
  }

}
