import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { map, Observable } from 'rxjs';

export interface UserResponse {
  id: number;
  nombre: string;
  edad: number;
  email: string;
  telefono: string;
}

export interface UserRequest {
  nombre: string;
  edad: number;
  email: string;
  telefono: string;
}
export interface ApiResponse<T> {
  success: boolean;
  message?: string;
  data?: T;
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private readonly Url = 'http://localhost:8080/api/usuario';

  private http = inject(HttpClient)

  getUser(): Observable<UserResponse[]> {
    return this.http
      .get<{ data: UserResponse[] }>(this.Url)
      .pipe(map(response => response.data));
  }

  createUser(user: UserRequest): Observable<UserResponse> {
    return this.http
      .post<ApiResponse<UserResponse>>(this.Url, user)
      .pipe(map((response) => response.data as UserResponse));
  }

  eliminarUser(id: number): Observable<String> {
    return this.http.delete<String>(`${this.Url}/${id}`);


  }
}
