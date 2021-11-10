import { Component, OnInit } from '@angular/core';
import { PixabayService } from '../../../services/pixabay.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-imagen',
  templateUrl: './list-imagen.component.html',
  styleUrls: ['./list-imagen.component.css']
})
export class ListImagenComponent implements OnInit {
  termino= '';
  subcripcion = Subscription;
  listImag : any[]= [];
  loading = false;
  ImgPorPag = 30;
  pagActual = 1;
  calcularTotalPag = 0;



  constructor(private _service: PixabayService) {
    this._service.getTerminoBusqueda().subscribe(data=>{
      console.log(data);
      this.termino = data;
      this.loading = true;
      this.obtenerImagenes();
    });
   }

  ngOnInit(): void {
  }

  obtenerImagenes(){
    this._service.getImagen(this.termino, this.ImgPorPag, this.pagActual).subscribe(data=>{
      this.loading = false;
      this.pagActual = 1;
      console.log(data);

      if (data.hits.length  === 0) {
        this._service.setError('Opsss.... no encontramos ningun resultado');
        return;
      }
      // console.log(Math.floor(data.totalHits / this.ImgPorPag));
      this.calcularTotalPag = Math.floor(data.totalHits / this.ImgPorPag);
      this.listImag = data.hits;
    }, error =>{
      console.log(error);
      this._service.setError('Opsss.... ocurrio un error');
      this.loading = false;
    })
  }

  pagAnterior(){
    this.pagActual --;
    this.loading = true;
    this.listImag = [];
    this.obtenerImagenes();
  }

  pagSiguiente(){
    this.pagActual ++;
    this.loading = true;
    this.listImag = [];
    this.obtenerImagenes();
  }
  pagAnteriorClass(){

    if (this.pagActual === 1) {
      return false;
    } else {
      return true;

    }
  }

  pagSiguienteClass(){

    if (this.pagActual === this.calcularTotalPag) {
      return false;
    } else {
      return true;

    }
  }

}
