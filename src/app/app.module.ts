import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BienvenidoComponent } from './components/bienvenido/bienvenido.component';
import { ControlEntidadComponent } from './components/control-entidad/control-entidad.component';
import { ListadoEntidadComponent } from './components/listado-entidad/listado-entidad.component';
import { UsuariosService } from './servicios/usuarios.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetalleEntidadComponent } from './components/detalle-entidad/detalle-entidad.component';
import {MatIconModule} from '@angular/material/icon';
import { BotonEntidadComponent } from './components/boton-entidad/boton-entidad.component';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidoComponent,
    ControlEntidadComponent,
    ListadoEntidadComponent,
    DetalleEntidadComponent,
    BotonEntidadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [
    UsuariosService,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
