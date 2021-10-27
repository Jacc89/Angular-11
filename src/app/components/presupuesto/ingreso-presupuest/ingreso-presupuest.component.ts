import { Component, OnInit } from '@angular/core';
import { PresupuestoService } from '../../../services/presupuesto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingreso-presupuest',
  templateUrl: './ingreso-presupuest.component.html',
  styleUrls: ['./ingreso-presupuest.component.css']
})
export class IngresoPresupuestComponent implements OnInit {
  cantidad: number;
  cantidadIncorrecta: boolean;

  constructor(private _presupuesto : PresupuestoService,
              private router:Router) {
    this.cantidad = 0;
    this.cantidadIncorrecta = false;
  }

  ngOnInit(): void {
  }
  agregar(){
    if(this.cantidad > 0){
      this.cantidadIncorrecta = false;
      this._presupuesto.presupuesto = this.cantidad;
      this._presupuesto.restante = this.cantidad;
      this.router.navigate(['gastos'])



    }else{
      this.cantidadIncorrecta = true;
    }
  }

}
