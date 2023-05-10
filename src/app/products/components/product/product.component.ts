import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
@Input() product:any ;
@Output() item =new EventEmitter()
isAddClicked=false;
amount=1;

add(){
  this.item.emit({item:this.product,quantity:this.amount})
  this.isAddClicked=false
}

}
