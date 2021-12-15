import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';

const routes: Routes = [
  {path : '',component:PrincipalComponent},
  {path : 'detalle-producto/:id',component:DetalleProductoComponent},
  {path : 'detalle-producto',component:DetalleProductoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
