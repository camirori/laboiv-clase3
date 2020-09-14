import { Component, OnInit, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-boton-entidad',
  templateUrl: './boton-entidad.component.html',
  styleUrls: ['./boton-entidad.component.css']
})
export class BotonEntidadComponent implements OnInit {
  @Input() objEntidad;
  @Output() deleteItemEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  deleteObj(){
    this.deleteItemEvent.emit(this.objEntidad);
  }

}
