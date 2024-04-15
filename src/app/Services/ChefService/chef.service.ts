import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Conge } from '../../Models/Conge';

@Injectable({
  providedIn: 'root'
})
export class ChefService {
  private url = "http://localhost:8080/";

  constructor(private httpClient: HttpClient) { }
  //afficher conges
affichertousconges():Observable<Conge[]>{
  return this.httpClient.get<Conge[]>(this.url+"employe/afficherconges")
}

//refuser conge
refuserConge(id: number): Observable<Conge> {
  return this.httpClient.post<Conge>(`${this.url}chef/refuserconge/${id}`, {});
}

//confirmer conge
confirmerConge(id: number): Observable<Conge> {
  return this.httpClient.post<Conge>(`${this.url}chef/confirmerconge/${id}`, {});
}

}
