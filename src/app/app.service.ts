import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Users } from './user.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private apiUrl: string = 'https://jsonplaceholder.typicode.com/users';

  opcoes: string[] = [];

  rides2: string = 'Always';

  constructor(private http: HttpClient) {}

  mostrarOpcoes() {
    return this.opcoes = [
      'Bret','Antonette','Samantha','Karianne','Kamren','Leopoldo_Corkery','Elwyn.Skiles','Maxime_Nienow','Delphine','Moriah.Stanton'
    ];
  }

  mostrarUsuarios(): Observable<Users[]> {
    return this.http.get<Users[]>(`${this.apiUrl}`);
  }

}
