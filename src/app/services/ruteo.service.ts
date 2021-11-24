import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RuteoService {
  urlGorest= 'https://gorest.co.in/public/v1/users';
  tokenGorest = '0c23f8a05d4456ca9e4e2e7f0df1c5159430bede1e6f5e71fef9e9ffc5d85d1a';
  
  constructor(private http: HttpClient ) { }

  getUsers():Observable<any>{
   return  this.http.get<any>(this.urlGorest + '?access-token=' + this.tokenGorest)
  }
  getUser(id: number):Observable<any>{
    return this.http.get<any>(this.urlGorest + '/'+ id + '?access-token=' + this.tokenGorest )

  }
}
