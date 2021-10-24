import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-count-empleados',
  templateUrl: './count-empleados.component.html',
  styleUrls: ['./count-empleados.component.css']
})
export class CountEmpleadosComponent implements OnInit {
  @Input() todos: number;
  @Input() masculino: number;
  @Input() femenino: number;
  @Output() countRadioSeleccionado= new EventEmitter<string>();


  radioSeleccionado ='todos';

  constructor() {
    this.todos = 0;
    this.femenino = 0;
    this.masculino = 0;
  }

  ngOnInit(): void {
  }

}
