import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';

@Component({
  selector: 'app-detalle-entidad',
  templateUrl: './detalle-entidad.component.html',
  styleUrls: ['./detalle-entidad.component.css']
})
export class DetalleEntidadComponent implements OnInit {
  @Input() dato: Usuario;
  @Output() deleteItemEvent = new EventEmitter<Usuario>();
  constructor() { }

  ngOnInit(): void {
  }

  deleteDato(obj: Usuario){
    this.deleteItemEvent.emit(obj);
  }

}
