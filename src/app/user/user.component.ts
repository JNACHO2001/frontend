import { Component, inject, } from '@angular/core';
import { UserResponse, UsersService, UserRequest } from '../services/users.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {

  //injectar el servicio
  private userService = inject(UsersService);

  // creacion del el array que usuarios que traigo de la response 
  users: UserResponse[] = [];
  // creacion de el objeto que nos manda el usuario 
  nuevoUsuario: UserRequest = { nombre: "", edad: undefined as unknown as number, email: "", telefono: "" };

  constructor() {
    // constructor para cargar los usuarios 
    this.cargarUsuarios();
  }
  //injectamos en una funcion el servicio con la funcionalidad get 
  cargarUsuarios() {
    this.userService.getUser().subscribe((data) => {
      this.users = data;

      console.log("este el el nuevo", data)
    });
  }

  crearUsuario() {
    if (!this.nuevoUsuario.nombre) return;

    this.userService.createUser(this.nuevoUsuario)
      .subscribe(nuevoUsuario => {
        this.users.push(nuevoUsuario);
        console.log(nuevoUsuario)


      })



  }

 eliminarUsuario(id: number) {
  this.userService.eliminarUser(id).subscribe({
    next: (mensaje) => {
      console.log(mensaje); 
      this.users = this.users.filter(u => u.id !== id);
    },
    error: (err) => {
      console.error("Error al eliminar usuario:", err);
    }
  });
}



}




