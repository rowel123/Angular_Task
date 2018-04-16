import { Injectable } from '@angular/core';
import { Observable } from'rxjs/Observable';
import { HttpClient } from'@angular/common/http';

export interface Users {
}

@Injectable()
export class UsersService {


  constructor(private http: HttpClient) {}

    getAllUsers(): Observable<Users[]> {
      return this.http.get<Users[]>('http://localhost:8000/api/users');
    }

    getUsersConfig(): Observable<any[]> {
      return this.http.get<any[]>('http://localhost:8000/api/users/config');
    }

    updateUsers(name,data): Observable<void> {
    return this.http.put<void>('http://localhost:8000/api/users/' + name, data);
    }

    updateArrangement(data): Observable<void> {
    return this.http.put<void>('http://localhost:8000/api/arrange/users', data);
    }

}
