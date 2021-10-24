import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convertidor',
  templateUrl: './convertidor.component.html',
  styleUrls: ['./convertidor.component.css']
})
export class ConvertidorComponent implements OnInit {
   cantidad = 0;
   tengo='USD';
   quiero='EUR';
   total=0;
   monedas: string[]=['USD','EUR','LIBRA', 'PESOS'];


  constructor() { }

  ngOnInit(): void {
  }
  convertir(){

    switch (this.tengo) {
      case 'USD':
        if (this.quiero ==='USD') {
          this.total=this.cantidad;
        }
        if (this.quiero ==='EUR') {
          this.total=this.cantidad*0.85;
        }
        if (this.quiero ==='LIBRA') {
          this.total=this.cantidad*0.72;
        }
        if (this.quiero ==='PESOS') {
          this.total=this.cantidad*3.815;
        }
        break;
        case 'EUR':
          if (this.quiero ==='USD') {
            this.total=this.cantidad*1.18;
          }
          if (this.quiero ==='EUR') {
            this.total=this.cantidad;
          }
          if (this.quiero ==='LIBRA') {
            this.total=this.cantidad*0.9;
          }
          if (this.quiero ==='PESOS') {
            this.total=this.cantidad*4.508;
          }

        break;
        case 'LIBRA':
          if (this.quiero ==='USD') {
            this.total=this.cantidad*1.38;
          }
          if (this.quiero ==='EUR') {
            this.total=this.cantidad*1.17;
          }
          if (this.quiero ==='LIBRA') {
            this.total=this.cantidad;
          }
          if (this.quiero === 'PESOS') {
            this.total=this.cantidad*5.281;
          }

        break;
        case 'PESOS':
          if (this.quiero ==='USD') {
            this.total=this.cantidad*0.00026;
          }
          if (this.quiero ==='EUR') {
            this.total=this.cantidad*0.00022;
          }
          if (this.quiero ==='LIBRA') {
            this.total=this.cantidad* 0.00019;
          }
          if (this.quiero ==='PESOS') {
            this.total=this.cantidad;
          }

        break;
    }

  }

}
