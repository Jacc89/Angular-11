import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PixabayService } from '../../services/pixabay.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  texto = '';
  mostrar = false;
  suscripcion : Subscription;

  constructor(private _service: PixabayService ) {
    this.suscripcion = this._service.getError().subscribe(data=>{
      console.log('error.ts');
      this.mostrarMensaje();
      this.texto = data;

    })
   }

  ngOnInit(): void {
  }
  ngOnDestroy():void{
    this.suscripcion.unsubscribe();

  }
  mostrarMensaje(){
    this.mostrar =true;
     setTimeout(() => {
       this.mostrar = false;

     }, 2000);
  }

}
