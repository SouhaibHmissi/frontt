import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../../Models/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AfficherusersService {

  url="http://localhost:8080/admin"
  constructor(private httpClient:HttpClient) { }
//afficher chefs
  affichertouschefs():Observable<User[]>{
    return this.httpClient.get<User[]>(this.url+"/afficherchefs")
  }
  //afficher employes
  affichertousemploye():Observable<User[]>{
    return this.httpClient.get<User[]>(this.url+"/afficheremployes")
  }



  //nbr chef
  obtenirNombreDeChefs(): Observable<number> {
    return this.httpClient.get<number>(`${this.url}/nbrchefs`);
  }
    //nbr employe
    obtenirNombreDeEmployes(): Observable<number> {
      return this.httpClient.get<number>(`${this.url}/nbremployes`);
    }
}
