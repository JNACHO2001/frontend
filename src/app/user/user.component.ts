import { Component, inject,} from '@angular/core';
import {  UserResponse, UsersService,UserRequest } from '../services/users.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  private  userService=inject(UsersService);
 users:UserResponse[]=[];
   nuevoUsuario: UserRequest = { nombre: '', edad:undefined as unknown as number, email: '', telefono: '' };

  constructor() {
    this.cargarUsuarios();
  }

  cargarUsuarios() {
    this.userService.getUser().subscribe((data) => {
      this.users = data;

      console.log("este el el nuevo",data)
    });
  }

  crearUsuario(){
    if (!this.nuevoUsuario.nombre)return;
    
    this.userService.createUser(this.nuevoUsuario)
.subscribe(nuevo =>{
  this.users.push(nuevo);
   console.log(nuevo)


})      
    


  }


 }

 
    

