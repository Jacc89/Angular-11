import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-noticias',
  templateUrl: './form-noticias.component.html',
  styleUrls: ['./form-noticias.component.css']
})
export class FormNoticiasComponent implements OnInit {
  @Output() parametrosSeleccionados = new EventEmitter<any>();

  categoriaSeleccionada = 'general';
  paisSeleccionada = 'co';

  categorias: any[]=[
    { value: 'general', nombre: 'General' },
    { value: 'business', nombre: 'Negocios' },
    { value: 'entertainment', nombre: 'Entretenimiento' },
    { value: 'health', nombre: 'Salud' },
    { value: 'science', nombre: 'Ciencia' },
    { value: 'sport', nombre: 'Deportes' },
    { value: 'technology', nombre: 'Tecnología' },
  ];
 paises: any[]=[
    { value: 'co', nombre: 'Colombia' },
    { value: 've', nombre: 'Venezuela' },
    { value: 'be', nombre: 'Belgica' },
    { value: 'ca', nombre: 'Canadá' },
    { value: 'de', nombre: 'Alemania' },
    { value: 'it', nombre: 'Italia' },
    { value: 'at', nombre: 'Australia' },
    { value: 'si', nombre: 'Eslovenia' },
    { value: 'ar', nombre: 'Argentina' },
    { value: 'br', nombre: 'Brasil' },
    { value: 'fr', nombre: 'Francia' },
    { value: 'hu', nombre: 'Hungria' },
    { value: 'mx', nombre: 'Mexico' },
    { value: 'gb', nombre: 'Reino Unido' },
  ];

  constructor() { }

  ngOnInit(): void {
  }
  buscarNoticia(){
    const PARAMETROS = {
      categoria: this.categoriaSeleccionada,
      pais: this.paisSeleccionada
    }
    this.parametrosSeleccionados.emit(PARAMETROS);
  }

}
