import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


import { ProductJaonArrayService } from '../services/product-json-array.service';



@Component({
  templateUrl: '../views/recent-purchases.component.html',
  styleUrls: ['../app.component.css'],
  providers: [ProductJaonArrayService]
})
export class RecentPurchasesComponent {
  title = 'Recent Purchaes';
  
  products : Observable <Array<any>>;
  
  constructor (private service : ProductJaonArrayService, private router: Router){
	  this.products = service.getProduct();
	}
	
	displayDetails(event, productId){
		 this.router.navigate(['/purchase-details', productId]);	
	}
	
	
  
}
