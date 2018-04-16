import { Injectable } from '@angular/core';
import { Observable } from'rxjs/Observable';
import { HttpClient } from'@angular/common/http';


export interface Products {
}
@Injectable()
export class ProductsService {



constructor(private http: HttpClient) {}



  getAllProducts(): Observable<Products[]> {
    return this.http.get<Products[]>('http://localhost:8000/api/products');

  }

  getProductsConfig(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8000/api/products/config');
  }


}
