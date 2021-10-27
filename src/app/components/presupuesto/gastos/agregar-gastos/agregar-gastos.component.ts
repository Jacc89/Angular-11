import { Component, OnInit } from '@angular/core';
import { PresupuestoService } from '../../../../services/presupuesto.service';

@Component({
  selector: 'app-agregar-gastos',
  templateUrl: './agregar-gastos.component.html',
  styleUrls: ['./agregar-gastos.component.css']
})
export class AgregarGastosComponent implements OnInit {

  nombreGasto: string;
  cantidad: number;
  formIncorrecto: boolean;
  textIncorrecto: string;

  constructor( private _service:PresupuestoService ) {
    this.cantidad= 0;
    this.nombreGasto ='';
    this.formIncorrecto = false;
    this.textIncorrecto = '';
  }

  ngOnInit(): void {
  }

  agregarGasto(){

    if (this.cantidad >this._service.restante) {
      this.formIncorrecto = true;
      this.textIncorrecto = 'Cantidad ingresada es mayor que el presupuesto';
      return;

    }
    if (this.nombreGasto === '' || this.cantidad  <=0) {
      this.formIncorrecto = true;
      this.textIncorrecto = 'Nombre gasto o cantidad incorrecto';

    }else{
      // crear el objeto
      const gasto ={
        nombre:this.nombreGasto,
        cantidad: this.cantidad
      }

      // enviar el objeto a los subcriptores via sujet
      this._service.agregarGasto(gasto);







      // reseteo de form
      this.formIncorrecto = false;
      this.cantidad= 0;
      this.nombreGasto ='';

    }

  }

}
