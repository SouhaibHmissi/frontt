import { Injectable } from '@angular/core';
import { Conge } from '../../Models/Conge';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {
  private url="http://localhost:8080/employe"

  constructor(private httpClient:HttpClient) { }
  //ajouter conge
  ajouterconge(conge:FormData):Observable<Conge>{
    return this.httpClient.post<Conge>(`${this.url}/ajouterconge`,conge)
  }
 
}
