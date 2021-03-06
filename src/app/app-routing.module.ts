import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// componentes
import { DadosComponent } from './components/dados/dados.component';
import { PianoComponent } from './components/piano/piano.component';
import { TareaComponent } from './components/tarea/tarea.component';
import { CambioComponent } from './components/cambio/cambio.component';
import { ResultadoComponent } from './components/bmicalculador/resultado/resultado.component';
import { BMICALCULADORComponent } from './components/bmicalculador/bmicalculador.component';
import { EmpleadoListComponent } from './components/empleado-list/empleado-list.component';
import { CitasComponent } from './components/citas/citas.component';
import { PresupuestoComponent } from './components/presupuesto/presupuesto.component';
import { GastosComponent } from './components/presupuesto/gastos/gastos.component';
import { ClimaComponent } from './components/clima/clima.component';
import { BitlyComponent } from './components/bitly/bitly.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { ClonPixabayComponent } from './components/clon-pixabay/clon-pixabay.component';
import { TarjetaCreditoComponent } from './components/tarjeta-credito/tarjeta-credito.component';
import { RuteoComponent } from './components/ruteo/ruteo.component';
import { LayoutRuteoComponent } from './components/ruteo/layout-ruteo/layout-ruteo.component';
import { DasboardRuteoComponent } from './components/ruteo/dasboard-ruteo/dasboard-ruteo.component';
import { ListUserRouteoComponent } from './components/ruteo/dasboard-ruteo/list-user-routeo/list-user-routeo.component';
import { UserRuteoComponent } from './components/ruteo/dasboard-ruteo/user-ruteo/user-ruteo.component';
import { AppEmpleadosComponent } from './components/app-empleados/app-empleados.component';
import { PreguntasRespuestasComponent } from './components/preguntas-respuestas/preguntas-respuestas.component';


const routes: Routes = [


  { path: 'dados', component: DadosComponent },
  { path: 'piano', component: PianoComponent },
  { path: 'tareas', component: TareaComponent },
  { path: 'cambio', component: CambioComponent },
  { path: 'inicio', component: BMICALCULADORComponent },
  { path: 'resultadoBIM/:valor', component: ResultadoComponent },
  { path: 'empleadoList', component: EmpleadoListComponent },
  { path: 'citas', component:CitasComponent },
  { path: 'presupuesto', component: PresupuestoComponent },
  { path: 'gastos', component: GastosComponent },
  { path: 'clima', component: ClimaComponent },
  { path: 'bitly', component: BitlyComponent },
  { path: 'noticias', component: NoticiasComponent },
  { path: 'pixabay', component: ClonPixabayComponent },
  { path: 'tarjeta', component: TarjetaCreditoComponent },
  { path: 'ruteo', component: RuteoComponent },
  { path: 'layout', component: LayoutRuteoComponent },
  { path: 'dashboard', component: DasboardRuteoComponent, children:[
    { path: '', component: ListUserRouteoComponent },
    { path: 'usuario/:id', component: UserRuteoComponent }
  ]},
  { path: 'ABM', component: AppEmpleadosComponent },
  { path: 'preguntas', component: PreguntasRespuestasComponent },
  { path: '', redirectTo: 'preguntas', pathMatch: 'full'}
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes),
            CommonModule
          ],
  exports: [RouterModule]

})
export class AppRoutingModule { }
