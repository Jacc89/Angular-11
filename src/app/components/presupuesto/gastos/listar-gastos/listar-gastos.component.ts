import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PresupuestoService } from '../../../../services/presupuesto.service';

@Component({
  selector: 'app-listar-gastos',
  templateUrl: './listar-gastos.component.html',
  styleUrls: ['./listar-gastos.component.css']
})
export class ListarGastosComponent implements OnInit {
  subscription : Subscription;
  presupuesto: number;
  restante: number;
  listGasto: any[]=[];

  constructor(private _services: PresupuestoService) {
    this.presupuesto = 0;
    this.restante = 0 ;
    this.subscription = this._services.getGastos().subscribe(data =>{
      this.restante = this.restante - data.cantidad;
      console.log(data);
      this.listGasto.push(data);
    })
  }

  ngOnInit(): void {
    this.presupuesto = this._services.presupuesto;
    this.restante = this._services.restante;
  }
  ngOnDestroy():void{
    this.subscription.unsubscribe();
  }
  colorRestante(){
    if (this.presupuesto / 4 > this.restante) {
      return "alert alert-danger";
      
    } else if(this.presupuesto / 2 > this.restante) {
      return "alert alert-warning";
      
    } else{
      return "alert alert-secondary";

    }

  }

}
