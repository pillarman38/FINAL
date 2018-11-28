import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap, catchError } from 'rxjs/operators';
import { of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

  constructor(private http: HttpClient) { }

  getUsers(res){
    return this.http.get("http://localhost:3001").pipe(map(res => res),
    tap(res => console.log(res)))
  }

  doLoggin(userInfo){
    return this.http.post("http://localhost:3001/api/users/login", userInfo)
    .pipe(
      map(res => res),
      catchError(err => {
        return of(err)
      }
    )) 
  }
}

