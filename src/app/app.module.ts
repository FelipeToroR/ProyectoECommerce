import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PrincipalComponent } from './principal/principal.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PrincipalComponent,
    DetalleProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
