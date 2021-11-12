import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';

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
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BitlyComponent } from './components/bitly/bitly.component';
import { NavurlComponent } from './components/bitly/navurl/navurl.component';
import { SpinnerComponent } from './components/bitly/spinner/spinner.component';
import { ShortUrlComponent } from './components/bitly/short-url/short-url.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { FormNoticiasComponent } from './components/noticias/form-noticias/form-noticias.component';
import { ListNoticiasComponent } from './components/noticias/list-noticias/list-noticias.component';
import { NavNoticiasComponent } from './components/noticias/nav-noticias/nav-noticias.component';
import { SpinnernotiComponent } from './shared/spinnernoti/spinnernoti.component';
import { BuscarImagenComponent } from './components/clon-pixabay/buscar-imagen/buscar-imagen.component';
import { ListImagenComponent } from './components/clon-pixabay/list-imagen/list-imagen.component';
import { NavImagenComponent } from './components/clon-pixabay/nav-imagen/nav-imagen.component';
import { ErrorComponent } from './shared/error/error.component';
import { ClonPixabayComponent } from './components/clon-pixabay/clon-pixabay.component';
import { TarjetaCreditoComponent } from './components/tarjeta-credito/tarjeta-credito.component';
import { CrearTargetaComponent } from './components/tarjeta-credito/crear-targeta/crear-targeta.component';
import { ListarTargetaComponent } from './components/tarjeta-credito/listar-targeta/listar-targeta.component';
import { RoutingComponent } from './components/routing/routing.component';

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
    BitlyComponent,
    NavurlComponent,
    SpinnerComponent,
    ShortUrlComponent,
    NoticiasComponent,
    FormNoticiasComponent,
    ListNoticiasComponent,
    NavNoticiasComponent,
    SpinnernotiComponent,
    BuscarImagenComponent,
    ListImagenComponent,
    NavImagenComponent,
    ErrorComponent,
    ClonPixabayComponent,
    TarjetaCreditoComponent,
    CrearTargetaComponent,
    ListarTargetaComponent,
    RoutingComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule
  ],
  providers: [
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: ShortInterceptor,
    //   multi: true
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
