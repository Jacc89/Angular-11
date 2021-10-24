
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// componentes
import { DadosComponent } from './components/dados/dados.component';
import { PianoComponent } from './components/piano/piano.component';
import { TareaComponent } from './components/tarea/tarea.component';
import { CambioComponent } from './components/cambio/cambio.component';
import { InicioComponent } from './components/bmicalculador/inicio/inicio.component';  // coponente de inicio de bmi
import { ResultadoComponent } from './components/bmicalculador/resultado/resultado.component';
import { BMICALCULADORComponent } from './components/bmicalculador/bmicalculador.component';
import { EmpleadoListComponent } from './components/empleado-list/empleado-list.component';

const routes: Routes = [


  { path: 'dados', component: DadosComponent },
  { path: 'piano', component: PianoComponent },
  { path: 'tareas', component: TareaComponent },
  { path: 'cambio', component: CambioComponent },
  { path: 'inicio', component: BMICALCULADORComponent},
  { path: 'resultadoBIM/:valor', component: ResultadoComponent },
  { path: 'empleadoList', component: EmpleadoListComponent},
  { path: '', redirectTo: 'empleadoList', pathMatch: 'full'}


];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes),
            CommonModule
          ],
  exports: [RouterModule]

})
export class AppRoutingModule { }
