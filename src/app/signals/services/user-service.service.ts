import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { SingleUserResponse, User } from '../interfaces/user-request.interface';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private httpClient = inject( HttpClient );
  private baseURL = 'https://reqres.in/api/users';

  constructor() { }

  getUserById(id:number): Observable<User>{
    return this.httpClient.get<SingleUserResponse>(`${this.baseURL}/${id}`)
    .pipe(
      map( response => response.data),
      tap( console.log ),
    )
  }

}
