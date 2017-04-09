import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()

export class BrandJaonArrayService {
  constructor(private http: Http) {}
  
  getBrand(): Observable<any>{
	   return this.http.get('assets/data/brands.json')
		.map((res:Response) => res.json())
		.catch((error:any) => Observable.throw(error.json().error || 'Server Error'));	
  }
}
