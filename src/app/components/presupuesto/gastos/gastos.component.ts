import { PresupuestoService } from './../../../services/presupuesto.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.css']
})
export class GastosComponent implements OnInit {

  constructor( public service: PresupuestoService,
               private router: Router) { }

  ngOnInit(): void {

    if (this.service.presupuesto === 0) {
      this.router.navigate(['presupuesto']);



    }

    console.log(this.service.presupuesto);

  }

}
