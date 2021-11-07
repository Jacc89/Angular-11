import { Component, OnInit } from '@angular/core';
import { PixabayService } from '../../../services/pixabay.service';

@Component({
  selector: 'app-buscar-imagen',
  templateUrl: './buscar-imagen.component.html',
  styleUrls: ['./buscar-imagen.component.css']
})
export class BuscarImagenComponent implements OnInit {
  nombreImagen: string;

  constructor( private _service: PixabayService) {
    this.nombreImagen = '';
  }

  ngOnInit(): void {
  }
  buscadorImagenes(){
    console.log(this.nombreImagen);

    if (this.nombreImagen === '') {
      this._service.setError('Agregar texto de busqueda');
      return;
    }

    this._service.enviarTerminoBusqueda(this.nombreImagen);


  }

}
