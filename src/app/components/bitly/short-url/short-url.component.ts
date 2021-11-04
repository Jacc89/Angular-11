import { Component, OnInit } from '@angular/core';
import { BitlyService } from '../../../services/bitly.service';

@Component({
  selector: 'app-short-url',
  templateUrl: './short-url.component.html',
  styleUrls: ['./short-url.component.css']
})
export class ShortUrlComponent implements OnInit {

  nombreUrl: string;
  shortUrl: string;
  urlProcesada: boolean;
  loading: boolean;
  mostrarError: boolean;
  textError: string;


  constructor(private _service: BitlyService) {

    this.nombreUrl='';
    this.shortUrl='';
    this.urlProcesada= false;
    this.loading = false;
    this.mostrarError= false;
    this.textError = '';

   }

  ngOnInit(): void {
  }
  procesarUrl(){
    // validar url vacia
    if (this.nombreUrl === '') {
      this.error('Oh Nooooo! hubo un error con la URL');
      return;
    }
    this.urlProcesada = false;
    this.loading = true;

    setTimeout(() => {
      this.obtenerUrlShort();
    }, 2000);

  }
  obtenerUrlShort(){
    this._service.getUrlShort(this.nombreUrl).subscribe(data =>{
      console.log(data);
      this.loading = false;
      this.urlProcesada = true;
      this.shortUrl = data.link;
    }, error =>{
      console.log(error);
      this.loading = false;
      this.nombreUrl='';
      if (error.error.description === 'The value provided is invalid.') {
        this.error('La URL que ingreo es invalida')
      }
    });
  }

  error(valor:string){
    this.mostrarError = true;
    this.textError = valor;

  console.log(this.nombreUrl);

  // Mostramos error por 4 segundos
  setTimeout(() => {
    this.mostrarError = false;
  }, 4000);

  }

}
