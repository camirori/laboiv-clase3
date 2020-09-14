import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';

@Component({
  selector: 'app-listado-entidad',
  templateUrl: './listado-entidad.component.html',
  styleUrls: ['./listado-entidad.component.css']
})
export class ListadoEntidadComponent implements OnInit {

  @Input() listado: Usuario[];
  @Output() itemSelectedEvent = new EventEmitter<any>();

  headers = ["Sexo", "email", "Nombre", "Apellido", "FechaNac", "FotoPerfil"];

  constructor() { }

  ngOnInit(): void {
  }

  verItem(item){
    this.itemSelectedEvent.emit(item);
  }

}
