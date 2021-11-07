import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PixabayService {
  private error$ = new Subject<string>();
  private terminoBusqueda$ = new Subject<string>();

  constructor( private http: HttpClient) { }

  setError(mensaje: string){
    this.error$.next(mensaje);
  }

  getError(): Observable<string>{

    return this.error$.asObservable();
  }

  enviarTerminoBusqueda(termino: string){
    this.terminoBusqueda$.next(termino);

  }
  getTerminoBusqueda(): Observable<string>{

    return this.terminoBusqueda$.asObservable();
  }
  getImagen(termino: string, ImgPorPag: number, pagActual:number): Observable< any >{
    const key = '19283773-f3243995e7a03164bc6c48c87';
    const Url = 'https://pixabay.com/api/?key='+ key +'&q='+ termino +'&per_page='+ ImgPorPag + '&page='+pagActual;
    return this.http.get(Url);
  }
}
