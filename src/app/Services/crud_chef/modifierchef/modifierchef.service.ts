import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../../Models/User';

@Injectable({
  providedIn: 'root'
})
export class ModifierchefService {


  constructor(private httpClient: HttpClient) { }
  private url = "http://localhost:8080/";
  afficherChef(id: number): Observable<User> {
    return this.httpClient.get<User>(`${this.url}admin/afficheruser/${id}`);
  }


 modifierChef(user:User,id: number): Observable<Object> {
    return this.httpClient.put(`${this.url}admin/modifieruser/${id}`,user);
  }
}
