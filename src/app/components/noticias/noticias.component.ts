import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../../services/noticias.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {
  PlistNoticias: any[] = [];
  loading = false;

  constructor(private _service:NoticiasService) { }

  ngOnInit(): void {
  }
  buscarNoticias(parametros:any){
    console.log('soy el padre');
    console.log(parametros);
    this.loading = true;
    this.PlistNoticias = [];
    setTimeout(() => {
      this._service.getNoticias(parametros).subscribe(data=>{
        console.log(data);
        this.loading = false;
        this.PlistNoticias = data.articles;
      }, error =>{
        console.log(error);
        this.loading = false;

      })
    }, 1000);



  }

}
