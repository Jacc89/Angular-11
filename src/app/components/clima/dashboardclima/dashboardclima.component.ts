import { Component, OnInit } from '@angular/core';
import { ClimaService } from '../../../services/clima.service';
// import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-dashboardclima',
  templateUrl: './dashboardclima.component.html',
  styleUrls: ['./dashboardclima.component.css']
})
export class DashboardclimaComponent implements OnInit {
  ciudad = '';
  tempetura = 0;
  humedad = 0;
  clima = '';
  description= '';
  query = false;
  loading = false;
  mostrarError = false;


  constructor(private _service: ClimaService,
              ) { 
                
    
  }

  ngOnInit(): void {
  }

  obtenerClima() {
    this.query = false;
    this.loading = true;

    this._service.getClima(this.ciudad).subscribe(data => {
      this.loading = false;
      this.query = true;
      this.tempetura = data.main.temp - 273
      this.humedad = data.main.humidity
      this.clima = data.weather[0].main
      this.description = data.weather[0].description
    }, error => {
      console.log(error);
      this.loading = false;
      this.error();
    })
  }

  error() {
    this.mostrarError = true;
    setTimeout(() => {
      this.mostrarError = false;
      this.ciudad = '';
    }, 3000);
  }

}
