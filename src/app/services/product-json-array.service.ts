import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()

export class ProductJaonArrayService {
  constructor(private http: Http) {}
  
 
  
  getProduct(): Observable<any>{
	  return this.http.get('assets/data/products.json')
		.map((res:Response) => res.json())
		.catch((error:any) => Observable.throw(error.json().error || 'Server Error'));
		
		  
  }
}
