import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()

export class CategoryJaonArrayService {
  constructor(private http: Http) {}
  
  getCategory(): Observable<any>{
	  return this.http.get('assets/data/categories.json')
		.map((res:Response) => res.json())
		.catch((error:any) => Observable.throw(error.json().error || 'Server Error'));
  }
}
