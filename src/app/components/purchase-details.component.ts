import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';


import { PurchaseDetailsJaonArrayService } from '../services/purchase-details-json-array.service';



@Component({
  templateUrl: '../views/purchase-details.component.html',
  styleUrls: ['../app.component.css'],
  providers: [PurchaseDetailsJaonArrayService]
})
export class PurchaseDetailsComponent {
  title = 'Purchase Details';
  
  private productId;
  private sub;
  product : Observable <Array<any>>;

  constructor(private route: ActivatedRoute, private service : PurchaseDetailsJaonArrayService, private router: Router) {
	
	this.sub = this.route.params.subscribe(params => {
      this.productId = +params['productId']; // (+) converts string 'id' to a number
    });
	
	this.product = this.service.getPurchaseDetails(this.productId);
	console.log(this.product);
	
  }

  goBack(event){
		 this.router.navigate(['/recent-purchases']);	
	}
  
  private ngOnInit() {}  
  
  
  
   
}
