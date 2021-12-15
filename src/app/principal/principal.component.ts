import { Component, OnInit } from '@angular/core';
import { Producto,ListaProductos } from '../interfaces/producto';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  Lista=ListaProductos;

  constructor() { }

  ngOnInit(): void {
  }

}
