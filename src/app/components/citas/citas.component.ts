import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css']
})
export class CitasComponent implements OnInit {

  listCita : any[] =[];

  constructor() { }

  ngOnInit(): void {
  }
   agregarCita(form:any){
    //  console.log('soy el padre');
     console.log(form);
     this.listCita.push(form);
   }

   eliminarCitaListado(index:number){

    this.listCita.splice(index,1)
   }

}
