import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { BrandJaonArrayService } from '../services/brand-json-array.service';

@Component({
  templateUrl: '../views/brands.component.html',
  styleUrls: ['../app.component.css'],
  providers: [BrandJaonArrayService]
})
export class BrandsComponent {
  title = 'Brands';
  brands : Observable <Array<any>>;
  
  constructor (private service : BrandJaonArrayService){
	  this.brands = service.getBrand();
	  
	  
	 
	
  }
}
