import { Component, OnInit } from '@angular/core';
import { Tareas } from '../../../models/tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  listaTareas: Tareas[]= [];
   nombreTarea = '';

  constructor() { }

  ngOnInit(): void {
  }

  agregarTarea(){
    console.log(this.nombreTarea)
    // Crear un tarea
    const tarea: Tareas={
      nombre:this.nombreTarea,
      estado: false
    }

    // Agregar Taeas
    this.listaTareas.push(tarea);

    // reset form
    this.nombreTarea = '';
  }

  eliminarTarea(index:number){
    console.log(index);
    this.listaTareas.splice(index, 1);

  }

  actualizarTarea( index:number, tarea: Tareas){
    this.listaTareas[index].estado = !tarea.estado;
  }

}
