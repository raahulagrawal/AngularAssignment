import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { CategoryJaonArrayService } from '../services/category-json-array.service';

@Component({
  templateUrl: '../views/categories.component.html',
  styleUrls: ['../app.component.css'],
  providers: [CategoryJaonArrayService]
})
export class CategoriesComponent {
  title = 'Categories';
  categories : Observable <Array<any>>;
  
  constructor (private service : CategoryJaonArrayService){
	  this.categories = service.getCategory();
	  //console.log('details->'+this.data);
	  
	 
	
  }
}
