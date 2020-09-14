import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-control-entidad',
  templateUrl: './control-entidad.component.html',
  styleUrls: ['./control-entidad.component.css']
})
export class ControlEntidadComponent implements OnInit {
  usuarios: Usuario[];
  usuarioSeleccionado: Usuario;
  usuariosBorrados: Usuario[];

  constructor(private servicioUsuario: UsuariosService) { }

  ngOnInit(): void {
    this.servicioUsuario.getUsuarios().subscribe((users: Usuario[])=>{
      this.usuarios=users;
      console.log(this.usuarios);
    }); 
    //this.usuarioSeleccionado= new Usuario 
    this.usuariosBorrados=[];
  }

  verDetalle(usuario){
    this.usuarioSeleccionado=usuario;
  }

  borrar(usuario){
    if(this.usuarios.includes(usuario)){
    this.usuariosBorrados.push(usuario);
    this.usuarios=this.usuarios.filter(user=>user!=usuario);      
    }
  }
}
