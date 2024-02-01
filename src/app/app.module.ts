import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { InicioComponent } from './templates/inicio/inicio.component';
import { ProductosComponent } from './templates/productos/productos.component';
import { PrimeroComponent } from './1-inicio-componentes/primero/primero.component';
import { SegundoComponent } from './1-inicio-componentes/segundo/segundo.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    ProductosComponent,
    PrimeroComponent,
    SegundoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
