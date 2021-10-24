import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

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

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
