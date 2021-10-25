import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/empleado';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css']
})
export class EmpleadoListComponent implements OnInit {
  listEmpleado: Empleado [] =  [
  { legajo: 1, nombre: 'Alexandra', apellido: 'Castro', sexo:'femenino', salario: 45000 },
  { legajo: 2, nombre: 'Luis', apellido: 'Castro', sexo:'masculino', salario: 25000 },
  { legajo: 3, nombre: 'Mery', apellido: 'Clavijo', sexo:'femenino', salario: 38000 },
  { legajo: 4, nombre: 'Carlos', apellido: 'Briceño', sexo:'masculino', salario: 35000 },
  { legajo: 5, nombre: 'Monica', apellido: 'Martinez', sexo:'femenino', salario: 67000 },
  { legajo: 6, nombre: 'Fernando', apellido: 'Castañeda', sexo:'masculino', salario: 54000 },
  { legajo: 7, nombre: 'Maria', apellido: 'Mora', sexo:'femenino', salario: 870000 },
]
radioSeleccionado ='todos';

  constructor() { }

  ngOnInit(): void {
  }
   allEmpleados():number{
     return this.listEmpleado.length;

   }

   totalFemenino(): number {
     return this.listEmpleado.filter(list => list.sexo === 'femenino').length;
   }
   totalMasculino(): number {
    return this.listEmpleado.filter(list => list.sexo === 'masculino').length;
  }

  RadioChangeSeleccionado(radioSeleccionadoChange:string):void{
    this.radioSeleccionado = radioSeleccionadoChange;

  }


}
