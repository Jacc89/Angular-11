import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-listcitas',
  templateUrl: './listcitas.component.html',
  styleUrls: ['./listcitas.component.css']
})
export class ListcitasComponent implements OnInit {
  @Input() listadoCita : any ;
  @Output() eliminar = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  Eliminarcita(index:number){
    this.eliminar.emit(index);

  }

}
