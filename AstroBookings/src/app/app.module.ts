import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { PiedepaginaComponent } from './piedepagina/piedepagina.component';
import { ListaenlacesComponent } from './listaenlaces/listaenlaces.component';

@NgModule({
  declarations: [							
    AppComponent,
      EncabezadoComponent,
      PiedepaginaComponent,
      ListaenlacesComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
