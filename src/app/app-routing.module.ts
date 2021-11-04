
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
  { path: 'url', component: BitlyComponent },
  { path: 'noticias', component: NoticiasComponent },
  { path: '', redirectTo: 'noticias', pathMatch: 'full'}
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes),
            CommonModule
          ],
  exports: [RouterModule]

})
export class AppRoutingModule { }
