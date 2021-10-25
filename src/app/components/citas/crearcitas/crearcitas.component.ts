import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-crearcitas',
  templateUrl: './crearcitas.component.html',
  styleUrls: ['./crearcitas.component.css']
})
export class CrearcitasComponent implements OnInit {

  nombre =  '';
  fecha =  '';
  hora =  '';
  sintoma =  '';
  formularioIncorrecto = false;
  @Output() nuevaCita = new EventEmitter<any>();


  constructor() { }

  ngOnInit(): void {
  }
  createCita(){
    if (this.nombre =='' || this.fecha == '' || this.hora =='' || this.sintoma =='') {
      this.formularioIncorrecto = true;
      return;
    }else{
      this.formularioIncorrecto = false;
    }

    // Creamos un objeto para el formuario

    const form ={
      nombre: this.nombre,
      fecha: this.fecha,
      hora: this.hora,
      sintoma: this.sintoma
    }
    console.log(form);
    this.nuevaCita.emit(form);
    this.resetForm();


  }
  resetForm(){
    this.nombre = '',
    this.fecha = '',
    this.hora = '',
    this.sintoma = ''
  }

}
