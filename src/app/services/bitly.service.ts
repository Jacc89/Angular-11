import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class BitlyService {

  url  = 'https://api-ssl.bitly.com/v4/shorten';
  token = '5cbd9acee1f654f6a69c37679768cb8190b2bb8e';


  constructor(private http:HttpClient) { }

  getUrlShort(nombreUrl: string): Observable<any> {
     const tokenHeader = new HttpHeaders({Authorization: 'Bearer '+ this.token});

        const body = {
          long_url: nombreUrl
        }

        return this.http.post(this.url, body);
      }
}
