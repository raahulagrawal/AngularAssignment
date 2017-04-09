import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()

export class PurchaseDetailsJaonArrayService {
  constructor(private http: Http) {}
  
 
  
  getPurchaseDetails(id : number): Observable<any>{
	  return this.http.get('assets/data/products.json')
		.map((res:Response) => res.json().filter(data => data.productId == id))
		.catch((error:any) => Observable.throw(error.json().error || 'Server Error'));
		
		  
  }
}
