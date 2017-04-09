import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { ProductJaonArrayService } from '../services/product-json-array.service';

@Component({
  templateUrl: '../views/product.component.html',
  styleUrls: ['../app.component.css'],
  providers: [ProductJaonArrayService]
})
export class ProductComponent {
  title = 'Products';
  products : Observable <Array<any>>;
  
  constructor (private service : ProductJaonArrayService){
	  this.products = service.getProduct();
	  //console.log('details->'+this.data);
	  
	 
	
  }
}
