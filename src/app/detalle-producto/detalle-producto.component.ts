import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Route } from '@angular/router';
import { NumericLiteral } from 'typescript';
import { Producto,ListaProductos } from '../interfaces/producto';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.scss']
})
export class DetalleProductoComponent implements OnInit {

  id:number=0; 
  produc:any;
  ListaProductos=ListaProductos;
  constructor(private ruta:ActivatedRoute) { 
    this.ruta.params.subscribe(parametros=>{
      this.id=parametros['id'];
  })
}

  ngOnInit(): void {
    this.produc=this.ListaProductos.find(objeto=>objeto.id=this.id);
  }

}
