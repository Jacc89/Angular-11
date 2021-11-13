import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TarjetaCredito } from 'src/app/models/tarjetaCredito';
import { TarjetaService } from 'src/app/services/tarjeta.service';

@Component({
  selector: 'app-crear-targeta',
  templateUrl: './crear-targeta.component.html',
  styleUrls: ['./crear-targeta.component.css']
})
export class CrearTargetaComponent implements OnInit {
  form: FormGroup;

  constructor( private _form: FormBuilder,
               private _targetaService: TarjetaService

                ) {

    this.form = this._form.group({
    titular: ['', Validators.required],
    numeroTarjeta: ['', Validators.required, Validators.minLength(16), Validators.maxLength(16)],
    fechaExpiracion: ['', Validators.required, Validators.minLength(5), Validators.maxLength(5)],
    cvv: ['', Validators.required, Validators.minLength(3), Validators.maxLength(3)],

    })
  }

  ngOnInit(): void {
  }
  crearTarjeta(){
    const TARJETA: TarjetaCredito = {
      titular: this.form.value.titular,
      numeroTarjeta: this.form.value.numeroTarjeta,
      fechaExpiracion: this.form.value.fechaExpiracion,
      cvv: this.form.value.cvv,
      fechaCreacion: new Date(),
      fechaActualizacion: new Date(),
    }
    console.log(TARJETA);
    // this._targetaService.guardarTarjeta(TARJETA).then(()=>{
    //   console.log('targeta reguistrada');
    //   this.form.reset();

    // }, error =>{
    //   console.log(error);
    // })
  }

}
