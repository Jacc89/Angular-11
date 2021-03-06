import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { MatSliderModule } from '@angular/material/slider';

// componentes
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
import { RuteoComponent } from './components/ruteo/ruteo.component';
import { DasboardRuteoComponent } from './components/ruteo/dasboard-ruteo/dasboard-ruteo.component';
import { LayoutRuteoComponent } from './components/ruteo/layout-ruteo/layout-ruteo.component';
import { FooterRouteoComponent } from './components/ruteo/dasboard-ruteo/footer-routeo/footer-routeo.component';
import { ListUserRouteoComponent } from './components/ruteo/dasboard-ruteo/list-user-routeo/list-user-routeo.component';
import { NavbarRouteoComponent } from './components/ruteo/dasboard-ruteo/navbar-routeo/navbar-routeo.component';
import { CardUserComponent } from './components/ruteo/dasboard-ruteo/list-user-routeo/card-user/card-user.component';
import { UserRuteoComponent } from './components/ruteo/dasboard-ruteo/user-ruteo/user-ruteo.component';
import { AppEmpleadosComponent } from './components/app-empleados/app-empleados.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PreguntasRespuestasComponent } from './components/preguntas-respuestas/preguntas-respuestas.component';
import { DashboardEmployComponent } from './components/preguntas-respuestas/dashboard-employ/dashboard-employ.component';
import { PreguntaComponent } from './components/preguntas-respuestas/pregunta/pregunta.component';
import { RespuestaComponent } from './components/preguntas-respuestas/respuesta/respuesta.component';
import { BotoneraComponent } from './components/preguntas-respuestas/pregunta/botonera/botonera.component';
import { NavbarEmployComponent } from './components/preguntas-respuestas/navbar-employ/navbar-employ.component';


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
    RuteoComponent,
    DasboardRuteoComponent,
    LayoutRuteoComponent,
    FooterRouteoComponent,
    DasboardRuteoComponent,
    NavbarRouteoComponent,
    ListUserRouteoComponent,
    CardUserComponent,
    UserRuteoComponent,
    AppEmpleadosComponent,
    PreguntasRespuestasComponent,
    DashboardEmployComponent,
    PreguntaComponent,
    RespuestaComponent,
    BotoneraComponent,
    NavbarEmployComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    // AngularFireModule.initializeApp(environment.firebase),
    // AngularFireAnalyticsModule,
    // AngularFirestoreModule
    MatSliderModule,
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
