import { Injectable } from '@angular/core';
import { Observable } from'rxjs/Observable';
import { HttpClient } from'@angular/common/http';

export interface Menu {
}
@Injectable()
export class MenuService {

  constructor(private http: HttpClient) { }

  getMenu(): Observable<Menu[]> {
    return this.http.get<Menu[]>('http://localhost:8000/api/menu');

  }

}
