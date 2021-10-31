import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PianoComponent } from './components/piano/piano.component';
import { DadosComponent } from './components/dados/dados.component';
import { NavbarComponent } from './components/tarea/navbar/navbar.component';
import { TareasComponent } from './components/tarea/tareas/tareas.component';
import { TareaComponent } from './components/tarea/tarea.component';
import { CambioComponent } from './components/cambio/cambio.component';
import { ConvertidorComponent } from './components/cambio/convertidor/convertidor.component';
import { NabComponent } from './components/cambio/nab/nab.component';
import { BMICALCULADORComponent } from './components/bmicalculador/bmicalculador.component';
import { InicioComponent } from './components/bmicalculador/inicio/inicio.component';
import { ResultadoComponent } from './components/bmicalculador/resultado/resultado.component';
import { EmpleadoListComponent } from './components/empleado-list/empleado-list.component';
import { CountEmpleadosComponent } from './components/empleado-list/count-empleados/count-empleados.component';
import { CitasComponent } from './components/citas/citas.component';
import { CrearcitasComponent } from './components/citas/crearcitas/crearcitas.component';
import { ListcitasComponent } from './components/citas/listcitas/listcitas.component';
import { GastosComponent } from './components/presupuesto/gastos/gastos.component';
import { PresupuestoComponent } from './components/presupuesto/presupuesto.component';
import { IngresoPresupuestComponent } from './components/presupuesto/ingreso-presupuest/ingreso-presupuest.component';
import { AgregarGastosComponent } from './components/presupuesto/gastos/agregar-gastos/agregar-gastos.component';
import { ListarGastosComponent } from './components/presupuesto/gastos/listar-gastos/listar-gastos.component';
import { ClimaComponent } from './components/clima/clima.component';
import { DashboardclimaComponent } from './components/clima/dashboardclima/dashboardclima.component';
import { NavclimaComponent } from './components/clima/navclima/navclima.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { config } from 'rxjs';

export function HttpLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http);
}


@NgModule({
  declarations: [
    AppComponent,
    PianoComponent,
    DadosComponent,
    NavbarComponent,
    TareasComponent,
    TareaComponent,
    CambioComponent,
    ConvertidorComponent,
    NabComponent,
    BMICALCULADORComponent,
    InicioComponent,
    ResultadoComponent,
    EmpleadoListComponent,
    CountEmpleadosComponent,
    CitasComponent,
    CrearcitasComponent,
    ListcitasComponent,
    GastosComponent,
    PresupuestoComponent,
    IngresoPresupuestComponent,
    AgregarGastosComponent,
    ListarGastosComponent,
    ClimaComponent,
    DashboardclimaComponent,
    NavclimaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
