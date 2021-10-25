import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/empleado';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css']
})
export class EmpleadoListComponent implements OnInit {
  listEmpleado: Empleado [] =  [
  { legajo: 1, nombre: 'Alexa', apellido: 'Castro', sexo:'femenino', salario: 45000 },
  { legajo: 2, nombre: 'Alexa', apellido: 'Castro', sexo:'masculino', salario: 45000 },
  { legajo: 3, nombre: 'Alexa', apellido: 'Castro', sexo:'femenino', salario: 45000 },
  { legajo: 4, nombre: 'Alexa', apellido: 'Castro', sexo:'masculino', salario: 45000 },
  { legajo: 5, nombre: 'Alexa', apellido: 'Castro', sexo:'femenino', salario: 45000 },
  { legajo: 6, nombre: 'Alexa', apellido: 'Castro', sexo:'masculino', salario: 45000 },
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
