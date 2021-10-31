import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {
  urlApi= 'https://api.openweathermap.org/data/2.5/weather?&appid=';
  key= '0adc33edf0fa661c86d610becc21c437';

  constructor(private http: HttpClient) { }

  getClima(ciudad:string):Observable<any>{
    const URL = this.urlApi + this.key + '&q='+ ciudad;
    return this.http.get(URL);

  }
}
