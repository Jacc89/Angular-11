import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http:HttpClient ) { }

  getNoticias(parametro:any): Observable<any>{
    const URL = 'https://newsapi.org/v2/top-headlines?country='+ parametro.pais +'&category='+ parametro.categoria +'&apiKey=011b5502917a45c496996a4af596b327';

    return this.http.get(URL);
  }
}
