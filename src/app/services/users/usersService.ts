import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, of} from 'rxjs';
import {apiUrlUsers} from '../../utils/linksApi';
import {emptyUsersJson, UsersJSON} from '../../models/users.model';



@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private http: HttpClient = inject(HttpClient);
  private apiUrl = apiUrlUsers;

  getUsersJson(): Observable<UsersJSON> {
    return this.http
      .get<UsersJSON>(this.apiUrl)
      .pipe(
        map(JsonArray => {return JsonArray}),
        catchError((error)=>{
          console.error('Erreur:', error);
          return of(emptyUsersJson)
        })
      );
  }
}
